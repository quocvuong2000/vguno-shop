import React from "react";
import "./top-nav.scss";

import logo from "../../assets/images/prologo1.png";
import {images} from '../../constants';

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__logo">
        <img src={logo} alt="" />
      </div>
      <div className="topnav__menu">
        <div className="topnav__menu__avatar">
        <img src={images.avt} alt="" />
        </div>
        <div className="topnav__menu__txt">
          Hello, Vuong-kun
        </div>
      </div>
    </div>
  );
};

export default TopNav;
