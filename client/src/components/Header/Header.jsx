import React, { useContext }  from "react";
import { productContext} from '../../context/productContext';
import './Header.css';
import logo  from '../../assets/logo.png'
import lupa  from '../../assets/lupa.png'


const Header = () => {

  const {setInfo, sortName, set_sortName, sortPrice, set_sortPrice, sortRating, set_sortRating, set_sortClear} = useContext(productContext)

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

     btnSortName.innerText = btnSortName.innerText === "Ordenar por nombre (A-Z)" ? "Ordenar por nombre (Z-A)" : "Ordenar por nombre (A-Z)";

    set_sortName(counterName)     

  }

  //Botón ordenar por precio
  const submitPrice = (event) =>{

    event.preventDefault();
        
    const counterPrice = sortPrice === 1 ? -1 : 1;

    let btnSortPrice = document.getElementById("btnSortPrice");  
    btnSortPrice.innerText = btnSortPrice.innerText === "Ordenar por precio (menor a mayor)" ? "Ordenar por precio (mayor a menor)" : "Ordenar por precio (menor a mayor)"; 

    set_sortPrice(counterPrice) 

  }

   //Botón ordenar por relevancia
   const submitRating = (event) =>{

    event.preventDefault();
        
    const counterRating = sortRating === 1 ? -1 : 1;

    let btnSortRating = document.getElementById("btnSortRating"); 
    btnSortRating.innerText = btnSortRating.innerText === "Ordenar por relevancia (1-3)" ? "Ordenar por relevancia (3-1)" : "Ordenar por relevancia (1-3)";  

    set_sortRating(counterRating) 

  }

  const submitClear=(event) =>{
    event.preventDefault();
    set_sortClear(0)
  }
  
  
  return (

  <header className="header"> 
     
    <div className="headerContainer">
      <img src={logo} alt="logoShop" className="logo" />
      <form className="formSearch" onSubmit={handleSubmit} className="formSearch">
        <input className="inputSearch" type="text" id="productSearched" name="productSearched" placeholder="Buscar nombre del producto o fabricante" />                        
        <button type="submit" className="btnSubmit"><img src={lupa} alt="lupa" className="lupa" /></button>        
      </form>
    </div>

    <div className="sortContainer">
      <button className="btnSortName" onClick={submitName} id="btnSortName">Ordenar por nombre (A-Z)</button>
      <button className="btnSortPrice" onClick={submitPrice} id="btnSortPrice">Ordenar por precio (menor a mayor)</button>
      <button className="btnSortRating" onClick={submitRating} id="btnSortRating" >Ordenar por relevancia (1-3)</button>
      <button className="btnSortClear" onClick={submitClear} id="btnSortClear" >X</button>
    </div>

    <div className="filterContainer">
      <p className="filter" id="filters"></p>
    </div>


  </header>);
};

export default Header;
