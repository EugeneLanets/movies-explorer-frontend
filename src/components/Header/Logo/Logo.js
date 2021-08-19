import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './Logo.scss';

const Logo = () => (
  <Link to="/" className="header__logo-link">
    <img src={logo} alt="Логотип" className="header__logo" />
  </Link>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
