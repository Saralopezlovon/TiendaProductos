import React from "react";
import './CardProduct.css';

const CardProduct = ({infoProduct}) => {

  const name = infoProduct.name
  const price = infoProduct.price
  const rating = infoProduct.rating
  const image = infoProduct.image
  const id= infoProduct.id

 


  return ( 
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>{price}</p>
      <p>{rating}</p>
      <p>id: {id}</p> 
    </div>
  );
};

export default CardProduct;
