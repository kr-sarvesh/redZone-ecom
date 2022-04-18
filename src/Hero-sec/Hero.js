import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../Images/img-1.png';
import menfeat from '../Images/bg.jpg';
import femfeat from '../Images/womenspo.jpg';
function Hero() {
  return (
    <div>
      <div
        className='md:flex justify-between items-center  
        w-full h-4/6'
      >
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-05'>
            <h1 className='py-3 text-5xl md:text-4xl font-bold '>
              Give Your Workout A Brand New Style!
            </h1>
            <p className='text-2xl'>
              Success is all about consistent hard work gains success.
            </p>
            <button className='btn btn-primary py-3 px-6 sm:w-[35%] my-3'>
              SHOP NOW
            </button>
          </div>
          <div>
            <img className='w-full' src={bgImg} alt='no-img' />
          </div>
        </div>
      </div>

      <h1 className='mb-10 text-center font-bold text-4xl'>OUR PRODUCTS</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2  lg:gap-3  justify-items-center'>
        <div className='py-10'>
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src={menfeat} alt='no-img' className='w-full' />
            <div className='flex justify-center'>
              <button
                className='btn btn-primary
             py-3 px-5  my-3 '
              >
                <Link rounded to={'/about'}>
                  men sportwear
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='py-10'>
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src={femfeat} alt='no-img' className='w-full' />
            <div className='flex justify-center'>
              <button
                className='btn btn-primary
             py-3 px-5  my-3 '
              >
                <Link rounded to={'/about'}>
                  women sportwear
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
