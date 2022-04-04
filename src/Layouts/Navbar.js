import React from 'react';
import { CgBmw } from 'react-icons/cg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <CgBmw className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
      </div>
      Navbar
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
