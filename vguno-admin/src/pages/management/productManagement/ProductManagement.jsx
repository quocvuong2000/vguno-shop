import React from "react";
import { Outlet } from "react-router-dom";

import DashBoardWarpper, {DashBoardWapperMain} from '../../../components/dashBoardWarpper/DashBoardWapper';

const ProductManagement = () => {
  return (
    <DashBoardWarpper>
      <DashBoardWapperMain>
      <h1>Quản lý sản phẩm</h1>
      <Outlet></Outlet>
      </DashBoardWapperMain>
    </DashBoardWarpper>
  );
};

export default ProductManagement;
