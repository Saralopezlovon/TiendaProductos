import React from "react";
import ListProduct from '../ListProduct';
import Product from '../Product';
import {Route, Routes} from 'react-router-dom'; //Para las rutas
import './Main.css';

const Main = () => {
  return (<main>
    <Routes> 
      <Route path="/" element={<ListProduct />} />
      <Route path="/product/detailsProduct" element={<Product />} />
    </Routes>
  </main>);
};

export default Main;
