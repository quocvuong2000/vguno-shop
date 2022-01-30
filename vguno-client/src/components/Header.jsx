import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/images/prologo.png";

const mainNav = [
  {
    display : 'Trang chủ',
    path : '/'
  },
  {
    display: 'Sản phẩm',
    path: '/categories'
  },
  {
    display: 'Blog',
    path : '/blog'
  },
  {
    display: 'Liên hệ',
    path : '/contact'
  }
]

const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <div className="header__toggle">
          <i className="bx bx-menu-alt-left"></i>
        </div>
        <div className="header-top">
          <div className="header-top__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header-top__search">
            <div className="header-top__search__input">
              <input type="text" placeholder="Tìm kiếm sản phẩm" />
              <i className="bx bx-search-alt"></i>
            </div>
          </div>
          <div className="header-top__cart">
            <ul className="header-top__cart__list">
            <li className="bx bx-bell"></li>
            <li className="bx bx-user"></li>
            <li className="bx bx-cart"></li>
            </ul>
          </div>
        </div>
        <div className="header-bottom">
          <ul className="header-bottom__list">
            <li className="header-bottom__list__item">
              <Link to={'/'}>Trang chủ</Link>
            </li>
            <li className="header-bottom__list__item">
              <Link to={'/categories'}>Sản phẩm</Link>
              <div className="header-bottom__list__item__dropdown">
                
              </div>
            </li>
            <li className="header-bottom__list__item">Blog</li>
            <li className="header-bottom__list__item">Liên hệ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
