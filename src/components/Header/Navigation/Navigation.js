import React from 'react';
import NavBar from './NavBar/NavBar';
import AccountButton from './AccountButton/AccountButton';
import './Navigation.scss';

const Navigation = ({ menuOpened }) => (
  <div className={`navigation header__navigation${menuOpened ? ' navigation_shown' : ''}`}>
    <NavBar />
    <AccountButton menuOpened={menuOpened} />
  </div>
);

export default Navigation;
