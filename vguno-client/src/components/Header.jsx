import React, {useRef} from "react";

import { Link } from "react-router-dom";

import logo from "../assets/images/prologo1.png";

import dd1 from "../assets/images/dropdown-images/729_x_356.jpg";
import dd2 from "../assets/images/dropdown-images/Artboard-4-copy-8-2.png";
import dd3 from "../assets/images/dropdown-images/Artboard-7-8.png";
import dd4 from "../assets/images/dropdown-images/Artboard-7-copy-8.png";
import dd5 from "../assets/images/dropdown-images/Artboard-8-8-1.png";
import dd6 from "../assets/images/dropdown-images/Artboard-8-copy-2-8.png";

const Header = () => {
  const headerContentRef = useRef(null);

  const openMenuHandler = () => {
    headerContentRef.current.classList.toggle('active');
  }
  return (
    <div className="header">
      <div className="container">
        <div className="header__toggle">
          <div className="header__toggle__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header__toggle__button" onClick={openMenuHandler}>
          <i className="bx bx-menu"></i>
          </div>
        </div>
        <div className="header-content" ref={headerContentRef}>
          <span className="header-content__close" onClick={openMenuHandler}>
            <i className="bx bx-x-circle"></i>
          </span>
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
                <Link to={"/"}>Trang chủ</Link>
              </li>
              <li className="header-bottom__list__item header-bottom__list__item__main">
                <Link to={"/categories"}>
                  Sản phẩm
                  <i className="bx bx-chevron-down"></i>
                </Link>
                <div className="header-bottom__dropdown">
                  <div className="header-bottom__dropdown__left">
                    <div className="header-bottom__dropdown__left__list__title">
                      Danh mục sản phẩm
                    </div>
                    <ul className="header-bottom__dropdown__left__list">
                      <Link to={"/"}>
                        <li className="header-bottom__dropdown__left__list__item">
                          <i className="bx bx-laptop"></i>
                          Laptop
                        </li>
                      </Link>
                      <Link to={"/"}>
                        <li className="header-bottom__dropdown__left__list__item">
                          <i className="bx bx-headphone"></i>
                          Tai nghe
                        </li>
                      </Link>
                      <Link to={"/"}>
                        <li className="header-bottom__dropdown__left__list__item">
                          <i className="bx bx-mouse"></i>
                          Chuột
                        </li>
                      </Link>
                      <Link to={"/"}>
                        <li className="header-bottom__dropdown__left__list__item">
                          <i className="bx bxs-keyboard"></i>
                          Bàn phím
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="header-bottom__dropdown__right">
                    <div className="header-bottom__dropdown__right__grid">
                      <div className="header-bottom__dropdown__right__grid__item">
                        <Link to={"/"}>
                          <img src={dd1} alt="" />
                        </Link>
                      </div>
                      <div className="header-bottom__dropdown__right__grid__item">
                        <Link to={"/"}>
                          <img src={dd2} alt="" />
                        </Link>
                      </div>
                      <div className="header-bottom__dropdown__right__grid__item">
                        <Link to={"/"}>
                          <img src={dd3} alt="" />
                        </Link>
                      </div>
                      <div className="header-bottom__dropdown__right__grid__item">
                        <Link to={"/"}>
                          <img src={dd4} alt="" />
                        </Link>
                      </div>
                      <div className="header-bottom__dropdown__right__grid__item">
                        <Link to={"/"}>
                          <img src={dd5} alt="" />
                        </Link>
                      </div>
                      <div className="header-bottom__dropdown__right__grid__item">
                        <Link to={"/"}>
                          <img src={dd6} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="header-bottom__list__item">
                <Link to={"/"}>Blog</Link>
              </li>
              <li className="header-bottom__list__item">
                <Link to={"/"}>Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
