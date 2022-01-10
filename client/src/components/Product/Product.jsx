import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDataLoader } from 'react-use-data-loader'
import './Product.css';
import axios from "axios";
import { Link } from "react-router-dom";

const productDetails = async(id) => {
  try {
    console.log(id)
    const resp = await axios.get(`http://localhost:4000/product/detailsProduct?id=${id}`)
    console.log(resp.data.docs[0])
    return resp.data.docs[0]

  } catch (error) {
    console.log(error);
  }
}

const Product = () => {

  const [searchParams] = useSearchParams();
  const {data, loading} = useDataLoader(productDetails, searchParams.get('id'))

  

  return <div className="globalCardDetails">
    {loading 
        ? <h1 className="loading">Loading...</h1>
        : <div className="cardDetailProduct">

            <div className="cardDetailImg">
            <img className="detailImg" src={data.image} alt={data.name} />
            </div>

            <div className="cardDetailInfo">
              <h1 className="cardDetailName">{data.name}</h1>
              <p className="cardDetailId">Cod/Ref: {data.id}</p>
              <p className="cardDetailRating">Relevancia: {data.rating}</p>
              <p className="cardDetailPrice">{data.price}€</p>
            </div>
            
           
      </div>
  }  

  <div className="btnHome"><Link to='/'>Volver</Link></div>

  </div>;
};

export default Product;
