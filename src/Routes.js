import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Productlist';
import Products from './Pages/Productlist';
import Cart from './Pages/Cart';
import Signin from './User/Signin';
import Signup from './User/Signup';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
