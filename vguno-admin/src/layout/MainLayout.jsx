import React from "react";
import "./main-layout.scss";

import SideBar from '../components/sideBar/SideBar';
import TopNav from '../components/topNav/TopNav';

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return <>
      <SideBar></SideBar>
      <div className="main">
        <div className="main__content">
          <TopNav></TopNav>
          <Outlet/>
        </div>
      </div>
  </>;
};

export default MainLayout;
