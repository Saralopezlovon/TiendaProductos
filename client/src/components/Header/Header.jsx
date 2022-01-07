import React from "react";
import './Header.css';
//import pikachu  from '../../assets/pikachu.png'


const Header = () => {
  return (

  <header> 
     
    <div className="headerContainer">
      <p>LOGO</p>
      <form className="formSearch">
        <label htmlFor="productSearched">Buscar producto</label><br />
        <input className="inputSearch" type="text" id="productSearched" name="productSearched" placeholder="Nombre producto o fabricante" />                        
        <button type="submit">Buscar</button>
      </form>
    </div>

    <div className="sortContainer">
      <button className="btnSortName" type="submit">Ordenar por nombre</button>
      <button className="btnSortPrice" type="submit">Ordenar por precio</button>
      <button className="btnSortRating" type="submit">Ordenar por relevancia</button>
    </div>

  </header>);
};

export default Header;
