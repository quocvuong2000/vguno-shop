import React, { useState, useEffect } from "react";
import "./side-bar.scss";

import { useLocation, Link } from "react-router-dom";
import { images } from "../../constants";
import sidebarNav from "../../configs/sidebarNav";

const SideBar = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(()=> {
    const curPath = location.pathname.split('/')[1];
    const curIndex = sidebarNav.findIndex(item => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : curIndex);
  },[location])

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={images.logo} alt="" />
      </div>
      <div className="sidebar__menu">
        {sidebarNav.map((item, index) => {
          return (
            <Link
              to={item.link}
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
              key={`nav-${index}`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__txt">{item.text}</div>
            </Link>
          );
        })}
        <div className="sidebar__menu__item">
          <div className="sidebar__menu__item__icon">
          <i className="bx bx-log-out"></i>
          </div>
          <div className="sidebar__menu__item__txt">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
