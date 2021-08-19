import React from 'react';
import './SignForm.scss';
import SignFormField from './SignFormField/SignFormField';
import SignFormFooter from './SignFormFooter/SignFormFooter';

const SignForm = ({
  title, text, linkText, linkTo, buttonText, children,
}) => (
  <form className="sign-form">
    <h1 className="sign-form__title">{title}</h1>
    {children}
    <SignFormField label="E-mail" inputType="email" fieldId="email" />
    <SignFormField label="Пароль" inputType="password" fieldId="password" />
    <SignFormFooter
      text={text}
      linkText={linkText}
      linkTo={linkTo}
      buttonText={buttonText}
    />
  </form>
);

export default SignForm;
