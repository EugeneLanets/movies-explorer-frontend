import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import './SignFormFooter.scss';

const SignFormFooter = ({
  text, linkText, linkTo, buttonText,
}) => (
  <footer className="sign-form__footer">
    <Button text={buttonText} className="sign-form__button" />
    <p className="sign-form__paragraph sign-form__text">
      {text}
      <Link to={linkTo} className="sign-form__link">{linkText}</Link>
    </p>
  </footer>
);

export default SignFormFooter;
