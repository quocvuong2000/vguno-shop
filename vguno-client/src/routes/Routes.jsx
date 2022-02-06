import React from 'react';

import {Routes as Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Categories from '../pages/Categories';
import Product from '../pages/Product';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => {
  return <Switch>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/categories' element={<Categories />}></Route>
    <Route path='/categories/:id' element={<Product/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Switch>;
};

export default Routes;
