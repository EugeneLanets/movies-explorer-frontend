import React from 'react';
import Icon from '../../Icon/Icon';
import './MenuButton.scss';

const MenuButton = ({ onClick, menuOpened }) => (
  <button className="menu-button" type="button" onClick={onClick}>
    <Icon className="menu-button__icon" iconId={menuOpened ? 'close-icon' : 'menu-icon'} />
  </button>
);

export default MenuButton;
