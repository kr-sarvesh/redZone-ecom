import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage';
import Products from './Pages/Productlist';
import MenProducts from './Pages/MenProducts';
import WomenProducts from './Pages/WomenProducts';

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
          <Route path='/MenProducts' element={<MenProducts />} />
          <Route path='/WomenProducts' element={<WomenProducts />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
