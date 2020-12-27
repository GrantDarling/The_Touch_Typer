import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='login_register__container register__container'>
        <h1 className='login_register__title'>Register</h1>
        <form className='login_register__form' onSubmit={(e) => onSubmit(e)}>
          <div>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              //required
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              //required
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              //minLength='6'
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
              //minLength='6'
            />
          </div>
          <button type='submit' value='register'>
            Register
          </button>
        </form>
        <hr />
        <div>
          <p className='login_register__p'>Have An Account?</p>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
