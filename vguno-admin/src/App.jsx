import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/App.scss";

import MainLayout from "./layout/MainLayout";
import DashBoard from "./pages/Dashboard";
import Blank from "./pages/Blank";
import ProductManagement from "./pages/management/productManagement/ProductManagement";
import Products from "./pages/management/productManagement/products/Products";
import Brands from "./pages/management/productManagement/brands/Brands";
import Categories from "./pages/management/productManagement/categories/Categories";

//PRODUCTS
import DataTableProducts from "./components/dataTable/dataTableProducts/DataTableProducts";
import AddProduct from "./pages/management/productManagement/products/addProduct/AddProduct";

//CATEGORIES
import DataTableCategories from "./components/dataTable/dataTableCategories/DataTableCategories";
import AddCat from "./pages/management/productManagement/categories/addCat/AddCat";

//BRANDS
import DataTableBrands from "./components/dataTable/dataTableBrands/DataTableBrands";
import AddBrand from "./pages/management/productManagement/brands/addBrand/AddBrand";

//CUSTOMERS
import Customers from "./pages/management/customers/Customers";

//ORDERS
import Orders from "./pages/management/orders/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="orders" element={<Orders />} />
          <Route path="productmanagement" element={<ProductManagement />}>
            <Route path="products" element={<Products />}>
              <Route index element={<DataTableProducts />}></Route>
              <Route path="add" element={<AddProduct/>}></Route>
            </Route>
            <Route path="brands" element={<Brands />}>
              <Route index element={<DataTableBrands />}></Route>
              <Route path="add" element={<AddBrand />}></Route>
            </Route>
            <Route path="categories" element={<Categories />}>
              <Route index element={<DataTableCategories />}></Route>
              <Route path="add" element={<AddCat/>}></Route>
            </Route>
          </Route>
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
