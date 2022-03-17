import React from "react";
import "./brand.scss";

import { Link, Outlet } from "react-router-dom";

const brands = () => {
  return (
    <div className="brand">
      <div className="brand__title">Quản lý hãng của sản phẩm</div>
      <div className="brand__add">
        <Link to={"add"} className="brand__add__btn">
          <i className="bx bx-plus-circle"></i>
          Thêm hãng
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default brands;
