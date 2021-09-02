import React from 'react';
import './SignForm.scss';
import SignFormField from './SignFormField/SignFormField';
import SignFormFooter from './SignFormFooter/SignFormFooter';

const SignForm = ({
  title, text, linkText, linkTo,
  buttonText, children, formName,
  onSubmit, fieldsValues, fieldsErrors,
  formValidity, onFieldChange, error,
}) => (
  <form
    className="sign-form"
    name={formName}
    noValidate
    onSubmit={onSubmit}
  >
    <h1 className="sign-form__title">{title}</h1>
    {children}
    <SignFormField
      label="E-mail"
      inputType="email"
      fieldId="email"
      value={fieldsValues.email}
      onChange={onFieldChange}
      formValidity={formValidity}
      errorMessage={fieldsErrors.email}
    />
    <SignFormField
      label="Пароль"
      inputType="password"
      fieldId="password"
      value={fieldsValues.password}
      onChange={onFieldChange}
      formValidity={formValidity}
      errorMessage={fieldsErrors.password}
      min="8"
    />
    <SignFormFooter
      text={text}
      linkText={linkText}
      linkTo={linkTo}
      buttonText={buttonText}
      disabled={!formValidity}
      error={error}
    />
  </form>
);

export default SignForm;
