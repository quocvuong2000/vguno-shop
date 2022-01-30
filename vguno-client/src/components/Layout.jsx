import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Routes from '../routes/Routes';

const Layout = () => {
  return <Router>
      <Header></Header>
      <div className="container">
        <div className="main">
          <Routes></Routes>
        </div>
      </div>
      <Footer></Footer>
  </Router>;
};

export default Layout;
