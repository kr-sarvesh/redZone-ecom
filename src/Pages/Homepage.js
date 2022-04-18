import React from 'react';
import Hero from '../Hero-sec/Hero';
import Navbar from '../Layouts/Navbar';

const Home = () => (
  <div className='flex flex-col justify-between h-screen'>
    <Navbar />
    <Hero />
  </div>
);
export default Home;
