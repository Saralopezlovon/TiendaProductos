import React, { useContext }  from "react";
import { productContext} from '../../context/productContext';
import './Header.css';
//import pikachu  from '../../assets/pikachu.png'


const Header = () => {

  const {setInfo} = useContext(productContext)

  const handleSubmit = (event) =>{
    event.preventDefault();
    const productSearched = event.target.elements.productSearched.value 
    setInfo(productSearched)  
  }

  return (

  <header> 
     
    <div className="headerContainer">
      <p>LOGO</p>
      <form className="formSearch" onSubmit={handleSubmit}>
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
