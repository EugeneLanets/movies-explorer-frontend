import React from 'react';

import AuthLinks from './AuthLinks/AuthLinks';

import './Header.scss';
import Logo from './Logo/Logo';
import MenuButton from './MenuButton/MenuButton';

import Navigation from './Navigation/Navigation';

const Header = ({
  loggedIn, isSignPage, isMenuOpen, onMenuClick, loading,
}) => (
  <header className={`header${loading ? 'header_loading' : ''}`}>
    <div
      className={`container header__container ${isSignPage ? 'header__container_type_sign' : ''}`}
    >
      <Logo />
      {!isSignPage && (loggedIn ? <Navigation menuOpened={isMenuOpen} /> : <AuthLinks />) }
      {!isSignPage && loggedIn && <MenuButton onClick={onMenuClick} menuOpened={isMenuOpen} />}
    </div>
  </header>
);

export default Header;
