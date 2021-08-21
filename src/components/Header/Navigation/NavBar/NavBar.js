import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => (
  <nav className="navbar">
    <NavLink
      exact
      to="/"
      className="navbar__link navbar__link_main "
      activeClassName="navbar__link_active"
    >
      Главная
    </NavLink>

    <NavLink
      to="/movies"
      className="navbar__link"
      activeClassName="navbar__link_active"
    >
      Фильмы
    </NavLink>

    <NavLink
      to="saved-movies"
      className="navbar__link"
      activeClassName="navbar__link_active"

    >
      Сохранённые фильмы
    </NavLink>
  </nav>
);

export default NavBar;
