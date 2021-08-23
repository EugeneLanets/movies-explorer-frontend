import React from 'react';
import './Button.scss';

const Button = ({ text, className }) => (
  <button className={`button ${className}`} type="submit">
    {text}
  </button>
);

export default Button;
