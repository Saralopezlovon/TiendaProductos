import React, {useContext}from "react";
import CardProduct from "./CardProduct/CardProduct";
import { productContext} from '../../context/productContext'
import './ListProduct.css';
import { Link } from "react-router-dom";


const ListProduct = () => {
  const {products, page, set_page, pagesTotal} = useContext(productContext)  

  const paintProducts = () =>{   
    return products.map((item,i)=><Link className='product-details' to={`product/detailsProduct?id=${item.id}`}> <CardProduct infoProduct={item} key={i}/> </Link>)
  }

  const submitPrevious = (event) =>{

    event.preventDefault();

    if(page > 1){
    
    let pageSelected = page-1 

    console.log(pageSelected)
    set_page(pageSelected) 

    }

  }


  const submitNext = (event) =>{

    event.preventDefault();

    if(page < pagesTotal){

    let pageSelected = page+1 

    console.log(pageSelected)
    set_page(pageSelected) 
    }

  }

  return <div className="globalContainer">

      <div className="productsContainer">   
        {paintProducts()}
      </div>

      <div className="paginateContainer">
        <button className="btnPrevious" onClick={submitPrevious} id="btnPrevious">Anterior</button>
        <button className="btnNext" onClick={submitNext} id="btnNext">Siguiente</button>
      </div>

    </div>
};

export default ListProduct;
