/* eslint-disable no-restricted-syntax */
import React from 'react';
import './SignForm.scss';
import SignFormField from './SignFormField/SignFormField';
import SignFormFooter from './SignFormFooter/SignFormFooter';

const SignForm = ({
  title, text, linkText, linkTo, buttonText, children, formName, onSubmit,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    onSubmit(formData);
  };
  return (
    <form
      className="sign-form"
      name={formName}
      onSubmit={handleSubmit}
    >
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
};

export default SignForm;
