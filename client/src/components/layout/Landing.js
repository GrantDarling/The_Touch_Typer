import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Fragment>
      <h1 className='landing__header'>Become a better developer</h1>
      <h4 className='landing__slogan'>
        Learn To Type Properly <em>for free.</em>
      </h4>
      <div className='landing__buttons'>
        <Link to='/login'>
          <button className='landing__button landing__login'>Login</button>
        </Link>
        <Link to='/register'>
          <button className='landing__button landing__register'>
            Register
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Landing;
