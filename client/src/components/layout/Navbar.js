import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';
import DesignSwitch from './DesignSwitch';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <h1>
        <Link to='/levels'>&lt; /&gt; Code Typer</Link>
      </h1>

      <ul>
        <li>
          <Link to='/levels'>Levels</Link>
        </li>
        <li>
          <DesignSwitch />
        </li>
        <li>
          <Link to='/login' onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <h1>
        <Link to='/'>&lt; /&gt; Code Typer</Link>
      </h1>

      <ul>
        <li>
          <DesignSwitch />
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <nav>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
