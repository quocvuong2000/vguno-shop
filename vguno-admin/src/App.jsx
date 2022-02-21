import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/App.scss";

import MainLayout from "./layout/MainLayout";
import DashBoard from "./pages/Dashboard";
import Blank from "./pages/Blank";
import ProductManagement from './pages/management/productManagement/ProductManagement';
import Products from './pages/management/productManagement/products/Products';
import Brands from './pages/management/productManagement/brands/Brands';
import Categories from './pages/management/productManagement/categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="orders" element={<Blank />} />
          <Route path="productmanagement" element={<ProductManagement />} >
              <Route index element={<Products/>}></Route>
              <Route path='brands' element={<Brands/>}></Route>
              <Route path='categories' element={<Categories/>}></Route>
          </Route>
          <Route path="customers" element={<Blank />} />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
