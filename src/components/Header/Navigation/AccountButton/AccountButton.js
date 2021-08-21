import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../../Icon/Icon';
import './AccountButton.scss';

const AccountButton = ({ menuOpened }) => (
  <NavLink
    to="/profile"
    activeClassName="account-button_active"
    className={`account-button header__account-button${menuOpened ? ' account-button_menu-opened' : ''}`}
  >
    <Icon
      className="account-button__icon"
      iconId="account-icon"
    />
    Аккаунт
  </NavLink>
);

export default AccountButton;
