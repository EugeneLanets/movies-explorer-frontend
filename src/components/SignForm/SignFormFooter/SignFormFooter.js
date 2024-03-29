import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import './SignFormFooter.scss';

const SignFormFooter = ({
  text, linkText, linkTo, buttonText, disabled, error,
}) => (
  <footer className="sign-form__footer">
    <p className="sign-form__error">{error}</p>
    <Button text={buttonText} className="sign-form__button" disabled={disabled} />
    <p className="sign-form__paragraph sign-form__text">
      {text}
      <Link to={linkTo} className="sign-form__link">{linkText}</Link>
    </p>
  </footer>
);

export default SignFormFooter;
