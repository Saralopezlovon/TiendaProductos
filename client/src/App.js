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
  const [sortPrice, setSortPrice] = useState(1);
  const [sortRating, setSortRating] = useState(1);

  //Función parametrizada por el valor del input de Header y cambiar su estado
   const setInfo = (productSearched) =>{
    setInput(productSearched)     
  }

  //Función parametrizada por el click que se haga en el botón: 
    //"Ordenar por nombre"
    const set_sortName = (counterName) =>{
      setSortName(counterName)
    }
    //"Ordenar por precio"
    const set_sortPrice = (counterPrice) =>{
      setSortPrice(counterPrice)
    }
    //"Ordenar por relevancia"
    const set_sortRating = (counterRating) =>{
      setSortRating(counterRating)
    }  
   

  //Función que muestra la búsqueda de
  const getProducts = async (productSearched, sortName, sortPrice, sortRating) =>{  

    console.log("Input buscado " + productSearched)
    console.log("Orden por nombre " + sortName)
    console.log("Orden por precio " + sortPrice)
    console.log("Orden por relevancia " + sortRating)

    if(!productSearched){

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
      try {
        const resp = await axios.get(`http://localhost:4000/products/search?nameProduct=${productSearched}`)
        const productsSearched = resp.data.docs
        setProducts([...productsSearched]) 
      } catch (err) {
        console.log(err)
      }
    }
  }

  //Cuando cambie el estado del buscador se ejecuta la función getProducts

  useEffect(() => {
    getProducts(input,sortName, sortPrice, sortRating)
  },[input, sortName, sortPrice, sortRating]);


  const dataProducts ={
    products, 

    setInfo,

    sortName,
    set_sortName,

    sortPrice,
    set_sortPrice,

    sortRating,
    set_sortRating,

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
