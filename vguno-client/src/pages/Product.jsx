import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Helmet from "../components/Helmet";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import productData from "../assets/fake-api/products";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = productData.getProductById(productId);
  // console.log(productData.getProductById(productId));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet name={product.title}>
      <Section>
        <SectionBody>
          <div className="container">
            ell
          </div>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>sản phẩm khác</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={3} smCol={1} gap={20}>
            {productData.getNumberProducts(4).map((item,index) => {
              return <ProductCard product={item} key={index}></ProductCard>
            })}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
