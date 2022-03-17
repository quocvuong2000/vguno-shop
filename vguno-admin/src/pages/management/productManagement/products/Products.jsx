import React from "react";
import { Link, Outlet } from "react-router-dom";
import './product.scss';


const Products = () => {
  return (
    <div className='product'>
    <div className="product__title">Quản lý sản phẩm</div>
    <div className="product__add">
        <Link to={"add"} className="product__add__btn">
          <i className="bx bx-plus-circle"></i>
          Thêm sản phẩm
        </Link>
      </div>
    <Outlet></Outlet>
  </div>
  );
};

export default Products;
