import React from 'react';
import './Menu.scss';
import MenuButton from '../Header/MenuButton/MenuButton';

const Menu = ({ onMenuClick, menuOpened }) => (
  <div className="menu">
    <div className="menu__content">
      <MenuButton onClick={onMenuClick} menuOpened={menuOpened} />
    </div>
  </div>
);

export default Menu;
