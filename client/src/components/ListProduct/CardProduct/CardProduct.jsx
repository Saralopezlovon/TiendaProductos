import React from "react";
import './CardProduct.css';

const CardProduct = ({infoProduct}) => {

  const name = infoProduct.name
  const price = infoProduct.price
  const rating = infoProduct.rating
  const image = infoProduct.image
  const id= infoProduct.id


  return ( 
    <div className="globalCard">
      <h1 className="cardName">{name}</h1>
      <p className="cardId">Cod/Ref: {id}</p> 
      <img className="cardImg" src={image} alt={name} />
      <p className="cardRating">Relevancia: {rating}</p>
      <p className="cardPrice">{price}€</p>
    </div>
  );
};

export default CardProduct;
