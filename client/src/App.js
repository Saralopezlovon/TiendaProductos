import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'; //Para utilizar rutas
import { productContext } from './context/productContext'; //Para utilizar context en apertura -> value={input} 

// import { useDebounce } from "use-debounce";
import axios from 'axios';

function App(props) {

  const [input, setInput] = useState(""); //Estado inicial del input búsqueda de productos
  const [products, setProducts] = useState([]); //Estado inicial de los productos
  // const [debouncedText] = useDebounce(input, 2000); //Por si necesito utilizarlo en algun onchange

  //Estado para los filtros
  const [sortName, setSortName] = useState(1);
  const [sortPrice, setSortPrice] = useState();
  const [sortRating, setRating] = useState();

  //Función parametrizada por el valor del input de Header y cambiar su estado
   const setInfo = (productSearched) =>{
    setInput({productSearched})     
  }

  //Función parametrizada por el click que se haga en el botón "Ordenar por nombre"
   const set_sortName = (counterName) =>{
    setSortName(counterName)
   } 

  //Función que muestra la búsqueda de
  const getProducts = async (item,sortName) =>{  
    console.log(item)
    console.log(sortName)

    if(!item.productSearched){

      //http://localhost:4000/?perPage=5&page=2&name=1

      //Búsqueda de todos    
      const allProducts = async ()=>{
        
        
        try{          
          const resp = await axios.get(`http://localhost:4000/`) 
          const allProducts = resp.data.docs     
          setProducts([...allProducts]) 
        
        }catch(err){
          console.log(err)
          }     
      }
      allProducts()

    }else{

      //Búsqueda específica
      const productName = (item.productSearched)
      try {
        const resp = await axios.get(`http://localhost:4000/products/search?nameProduct=${productName}`)
        const productsSearched = resp.data.docs
        setProducts([...productsSearched]) 
      } catch (err) {
        console.log(err)
      }
    }
  }

  //Cuando cambie el estado del buscador se ejecuta la función getProducts

  useEffect(() => {
    getProducts(input,sortName)
  },[input,sortName]);


  const dataProducts ={
    products, 
    setInfo,
    sortName,
    set_sortName
  }


  return (
    <div className="App">
      <BrowserRouter> 
          <productContext.Provider value={dataProducts} >    
            <Header/>
            <Main/>  
          </productContext.Provider>            
      </BrowserRouter>

      <Footer/>
    
    </div>
  );
}

export default App;
