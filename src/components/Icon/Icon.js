import React from 'react';
import sprite from '../../images/sprite.svg';

const Icon = ({ className, iconId }) => (
  <svg className={className}>
    <use xlinkHref={`${sprite}#${iconId}`} />
  </svg>
);

export default Icon;
