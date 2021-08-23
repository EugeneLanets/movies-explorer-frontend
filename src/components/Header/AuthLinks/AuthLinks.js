import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLinks.scss';

const AuthLinks = () => (
  <ul className="header__links">
    <li className="header__links-item">
      <Link className="header__link" to="/signup">Регистрация</Link>
    </li>
    <li className="header__links-item">
      <Link className="header__link header__link_accent" to="/signin">Войти</Link>
    </li>
  </ul>
);

export default AuthLinks;
