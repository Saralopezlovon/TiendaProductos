import React, { useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'; //Para utilizar rutas
import { productContext } from './context/productContext'; //Para utilizar context en apertura -> value={input} 
import axios from 'axios';

function App(props) {

  const [input, setInput] = useState(""); //Estado inicial del input búsqueda de productos
  const [products, setProducts] = useState([]); //Estado inicial de los productos


  //Función para que me traiga por defecto todos los productos
  
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


   //Función parametrizada por el valor del input de Header y cambiar estado
   const setInfo = (productSearched) =>{
    setInput({productSearched})     
  }

  const dataProducts ={
    products, 
    setInfo  
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
