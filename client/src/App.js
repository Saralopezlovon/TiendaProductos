//import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'; //Para utilizar rutas
import { productContext } from './context/productContext'; //Para utilizar context en apertura -> value={input} 
//import axios from 'axios';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
          <productContext.Provider >    
            <Header/>
            <Main/>  
          </productContext.Provider>            
      </BrowserRouter>

      <Footer/>
    
    </div>
  );
}

export default App;
