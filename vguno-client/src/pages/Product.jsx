import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import productData from '../assets/fake-api/products';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  console.log(productData.getProductById(productId));
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return <div>Product</div>;
};

export default Product;
