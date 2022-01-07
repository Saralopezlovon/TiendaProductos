import React, {useContext}from "react";
import CardProduct from "./CardProduct/CardProduct";
import { productContext} from '../../context/productContext'
import './ListProduct.css';


const ListProduct = () => {
  const {products} = useContext(productContext)

  const paintProducts = () =>{   
    return products.map((item,i)=> <CardProduct infoProduct={item} key={i}/>)
  }

  return <div>
    ListProduct aqui oiga :
    {paintProducts()}
    </div>;
};

export default ListProduct;
