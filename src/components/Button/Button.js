import React from 'react';
import './Button.scss';

const Button = ({
  text, className, disabled, onClick,
}) => (
  <button
    className={`button ${className}`}
    type="submit"
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
