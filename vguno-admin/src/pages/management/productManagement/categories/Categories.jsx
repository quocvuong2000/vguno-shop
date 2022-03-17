import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './category.scss';
const Categories = () => {
  return (
    <div className='category'>
    <div className="category__title">Quản lý danh mục sản phẩm</div>
    <div className="category__add">
        <Link to={"add"} className="category__add__btn">
          <i className="bx bx-plus-circle"></i>
          Thêm danh mục
        </Link>
      </div>
    <Outlet></Outlet>
  </div>
  )
}

export default Categories