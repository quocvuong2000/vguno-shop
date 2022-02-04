import React,{useRef} from "react";
import Helmet from "../components/Helmet";

import Checkbox from "../components/Checkbox";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import PriceSlider from "../components/PriceSlider";
import Button from "../components/Button";

import productData from "../assets/fake-api/products";
import brandsData from "../assets/fake-api/brands";
import categoryData from "../assets/fake-api/category";

import asus from "../assets/images/banner/asus.jpg";

const Categories = () => {
  const filterToggleRef = useRef(null);
  const toggleFilterHandler = () => {
    return filterToggleRef.current.classList.toggle('active');
  }
  return (
    <Helmet name="Danh mục">
      <div className="category-banner">
        <img src={asus} alt="" />
      </div>
      <div className="category-title">danh sách sản phẩm</div>
      <div className="category">
        <div className="category__filters" ref={filterToggleRef}>
          <div className="category__filters__close" onClick={toggleFilterHandler}>
            <i className="bx bx-chevrons-left"></i>
          </div>
          <div className="category__filters__item">
            <div className="category__filters__item__title">bộ lọc</div>
            <select className="category__filters__item__select">
              <option value="newest">Mới nhất</option>
              <option value="priceinc">Giá tăng dần</option>
              <option value="pricedec">Giá giảm dần</option>
            </select>
          </div>
          <div className="category__filters__item">
            <div className="category__filters__item__title">thương hiệu</div>
            <select className="category__filters__item__select">
              {brandsData.getAllBrands().map((item, index) => {
                return (
                  <option value={item.brandId} key={index}>
                    {item.display}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="category__filters__item">
            <div className="category__filters__item__title">Danh mục</div>
            <div className="category__filters__item__checkbox">
              {categoryData.getAllCategory().map((item, index) => {
                return <Checkbox label={item.display} key={index}></Checkbox>;
              })}
            </div>
          </div>
          <div className="category__filters__item">
            <div className="category__filters__item__title">Bộ lọc giá</div>
            <PriceSlider></PriceSlider>
          </div>
        </div>
        <div className="category__toggle">
            <Button size="sm" onClick={toggleFilterHandler}>lọc sản phẩm</Button>
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
