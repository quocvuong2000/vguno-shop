import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import DashBoardWarpper, {
  DashBoardWapperMain,
} from "../../../components/dashBoardWarpper/DashBoardWapper";
import ManagementItem from "../../../components/managementItem/ManagementItem";

const managementData = [
  {
    title: "Quản lý sản phẩm",
    link: "/productmanagement/products",
    icon: "bx bx-cube",
  },
  {
    title: "Quản lý hãng",
    link: "/productmanagement/brands",
    icon: "bx bx-category",
  },
  {
    title: "Quản lý danh mục",
    link: "/productmanagement/categories",
    icon: "bx bx-table",
  },
];

const ProductManagement = () => {
  const [active, setActive] = useState(0);
  const { pathname } = useLocation();
  useEffect(() => {
    let currentIndex = managementData.findIndex(
      (item) =>
        item.link.toString() ===
        pathname.split("/").slice(0, 3).join("/").toString()
    );
    setActive(currentIndex);
  }, [pathname]);

  return (
    <DashBoardWarpper>
      <DashBoardWapperMain>
        <div className="management">
          <div className="management__list">
            {managementData.map((item, index) => {
              return <ManagementItem item={item} key={index} active={active === index ? "active" : ""}></ManagementItem>;
            })}
          </div>
        </div>
        <Outlet></Outlet>
      </DashBoardWapperMain>
    </DashBoardWarpper>
  );
};

export default ProductManagement;
