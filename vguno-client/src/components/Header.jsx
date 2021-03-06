import React, { useRef, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import logo from "../assets/images/prologo1.png";

import dd1 from "../assets/images/dropdown-images/729_x_356.jpg";
import dd2 from "../assets/images/dropdown-images/Artboard-4-copy-8-2.png";
import dd3 from "../assets/images/dropdown-images/Artboard-7-8.png";
import dd4 from "../assets/images/dropdown-images/Artboard-7-copy-8.png";
import dd5 from "../assets/images/dropdown-images/Artboard-8-8-1.png";
import dd6 from "../assets/images/dropdown-images/Artboard-8-copy-2-8.png";

import category from "../assets/fake-api/category";

import { useSelector } from "react-redux";

const Header = () => {
  const headerContentRef = useRef(null);
  const headerShrink = useRef(null);
  const [totalItem, setTotalItem] = useState(0);

  const cartItem = useSelector((state) => state.cartItem.value);
  useEffect(() => {
    setTotalItem(cartItem.reduce((total, item) => (total += item.quantity), 0));
  }, [cartItem]);

  const openMenuHandler = () => {
    headerContentRef.current.classList.toggle("active");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerShrink.current.classList.add("shrink");
      } else {
        headerShrink.current.classList.remove("shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className="header" ref={headerShrink}>
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
                <input type="text" placeholder="T??m ki???m s???n ph???m" />
                <i className="bx bx-search-alt"></i>
              </div>
            </div>
            <div className="header-top__cart">
              <ul className="header-top__cart__list">
                <Link to={"/"}>
                  <li className="header-top__cart__list__item">
                    <i className="bx bx-bell"></i>
                    <span>Th??ng b??o</span>
                  </li>
                </Link>

                <Link to={"/login"}>
                  <li className="header-top__cart__list__item">
                    <i className="bx bx-user"></i>
                    <span>????ng nh???p</span>
                  </li>
                </Link>

                <Link to={"/cart"}>
                  <li className="header-top__cart__list__item header-top__cart__list__item__main">
                    <i className="bx bx-cart"></i>
                    <span>Gi??? h??ng</span>
                    <div className="notification">
                      <span>{totalItem}</span>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="header-bottom">
            <ul className="header-bottom__list">
              <li className="header-bottom__list__item">
                <Link to={"/"}>Trang ch???</Link>
              </li>
              <li className="header-bottom__list__item header-bottom__list__item__main">
                <Link to={"/categories"}>
                  S???n ph???m
                  <i className="bx bx-chevron-down"></i>
                </Link>
                <div className="header-bottom__dropdown">
                  <div className="header-bottom__dropdown__left">
                    <div className="header-bottom__dropdown__left__list__title">
                      Danh m???c s???n ph???m
                    </div>
                    <ul className="header-bottom__dropdown__left__list">
                      {category.getAllCategory().map((item, index) => {
                        return (
                          <li
                            className="header-bottom__dropdown__left__list__item"
                            key={index}
                          >
                            <i className={item.icon}></i>
                            {item.display}
                          </li>
                        );
                      })}
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
                <Link to={"/"}>Li??n h???</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
