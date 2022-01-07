import React from "react";
import './CardProduct.css';

const CardProduct = ({infoProduct}) => {

  const name = infoProduct.name
  const price = infoProduct.price
  const rating = infoProduct.rating
  const image = infoProduct.image


  return ( 
    <div className="card">
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>{price}</p>
      <p>{rating}</p> 
    </div>
  );
};

export default CardProduct;
