import React from 'react';
import AccountButton from './AccountButton/AccountButton';
import AuthLinks from './AuthLinks/AuthLinks';

import './Header.scss';
import Logo from './Logo/Logo';
import MenuButton from './MenuButton/MenuButton';
import NavBar from './NavBar/NavBar';

const Header = ({ loggedIn, isSignPage, onMenuClick }) => (
  <header className="header">
    <div
      className={`container header__container ${isSignPage ? 'header__container_type_sign' : ''}`}
    >
      <Logo />
      {!isSignPage && loggedIn && <NavBar />}
      {!isSignPage && (loggedIn ? <AccountButton /> : <AuthLinks />) }
      <MenuButton onClick={onMenuClick} />
    </div>
  </header>
);

export default Header;
