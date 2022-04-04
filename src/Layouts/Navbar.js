import React from 'react';
import { CgBmw } from 'react-icons/cg';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
  return (
    <nav className='navbar shadow-lg bg-neutral text-neutral-content '>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <CgBmw className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <form className='flex '>
              <input className='rounded' type='text' placeholder='Search' />
            </form>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Login
            </Link>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Products
            </Link>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              <AiOutlineHeart className='inline pr-2 text-3xl' />
            </Link>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              <AiOutlineShoppingCart className='inline pr-2 text-3xl' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: 'Sports-Zone',
};
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
