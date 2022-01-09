import React, { useContext }  from "react";
import { productContext} from '../../context/productContext';
import './Header.css';
//import pikachu  from '../../assets/pikachu.png'


const Header = () => {

  const {setInfo, sortName, set_sortName, sortPrice, set_sortPrice, sortRating, set_sortRating} = useContext(productContext)

  const handleSubmit = (event) =>{
    event.preventDefault();
    const productSearched = event.target.elements.productSearched.value 
    setInfo(productSearched)  
  };

  //Botón ordenar por nombre
  const submitName = (event) =>{

    event.preventDefault();
        
    const counterName = sortName === 1 ? -1 : 1;

    let btnSortName = document.getElementById("btnSortName");  
    btnSortName.style.color = btnSortName.style.color === "blue" ? "black" : "blue"; 

    set_sortName(counterName) 

  }

  //Botón ordenar por precio
  const submitPrice = (event) =>{

    event.preventDefault();
        
    const counterPrice = sortPrice === 1 ? -1 : 1;

    let btnSortPrice = document.getElementById("btnSortPrice");  
    btnSortPrice.style.color = btnSortPrice.style.color === "blue" ? "black" : "blue"; 

    set_sortPrice(counterPrice) 

  }

   //Botón ordenar por relevancia
   const submitRating = (event) =>{

    event.preventDefault();
        
    const counterRating = sortRating === 1 ? -1 : 1;

    let btnSortRating = document.getElementById("btnSortRating");  
    btnSortRating.style.color = btnSortRating.style.color === "blue" ? "black" : "blue"; 

    set_sortRating(counterRating) 

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
      <button className="btnSortName" onClick={submitName} id="btnSortName">Ordenar por nombre</button>
      <button className="btnSortPrice" onClick={submitPrice} id="btnSortPrice">Ordenar por precio</button>
      <button className="btnSortRating" onClick={submitRating} id="btnSortRating" >Ordenar por relevancia</button>
    </div>

  </header>);
};

export default Header;
