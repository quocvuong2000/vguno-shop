import React from 'react';

import {Routes as Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Categories from '../pages/Categories';
import Product from '../pages/Product';

const Routes = () => {
  return <Switch>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/category' element={<Categories />}></Route>
    <Route path='/category/:id' element={<Product/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Switch>;
};

export default Routes;
