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

  

  return <div>
    {loading 
        ? <div>loading...</div>
        : <div>
            <p>{data.name}</p>
            <img src={data.image} alt={data.name} />
            <p>{data.price}</p>
            <p>{data.rating}</p>
            <p>id: {data.id}</p> 
      </div>
  }  

  <div><Link to='/'>Volver</Link></div>

  </div>;
};

export default Product;
