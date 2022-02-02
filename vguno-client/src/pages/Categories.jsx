import React from "react";
import Helmet from "../components/Helmet";

import Checkbox from "../components/Checkbox";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import productData from "../assets/fake-api/products";
import brandsData from "../assets/fake-api/brands";
import categoryData from '../assets/fake-api/category';

const Categories = () => {
  return (
    <Helmet name="Danh mục">
      <div className="category-title">danh sách sản phẩm</div>
      <div className="category">
        <div className="category__filters">
          <div className="category__filters__item">
            <div className="category__filters__item__title">Thuong hieu</div>
            <select className="category__filters__item__select">
              {brandsData.map((item,index) => {
                return <option value={item.brandId} key={index}>{item.display}</option>
              })}
            </select>
          </div>
          <div className="category__filters__item">
            <div className="category__filters__item__title">Danh muc</div>
            <div className="category__filters__item__checkbox">
              {categoryData.map((item,index) => {
                return <Checkbox label={item.display} key={index}></Checkbox>
              })}
            </div>
          </div>
        </div>
        <div className="category__products">
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getAllProducts().map((item, index) => {
              return <ProductCard product={item} key={index}></ProductCard>;
            })}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
};

export default Categories;
