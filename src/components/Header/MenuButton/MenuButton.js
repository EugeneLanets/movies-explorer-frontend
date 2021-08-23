import React from 'react';
import Icon from '../../Icon/Icon';
import './MenuButton.scss';

const MenuButton = ({ onClick, menuOpened }) => {
  const iconId = !menuOpened ? 'menu-icon' : 'close-icon';

  return (
    <button className="menu-button" type="button" onClick={onClick}>
      <Icon className={`menu-button__icon menu-button__icon_${iconId}`} iconId={iconId} />
    </button>
  );
};

export default MenuButton;
