import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/levels' />;
  }

  return (
    <Fragment>
      <section className='login_register__container login__container'>
        <h1 className='login_register__title'>Login</h1>
        <form className='login_register__form' onSubmit={(e) => onSubmit(e)}>
          <div>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <button type='submit' value='login'>
            Login
          </button>
        </form>
        <hr />
        <div>
          <p className='login_register__p'>No Account?</p>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
