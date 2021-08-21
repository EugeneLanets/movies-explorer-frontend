import React from 'react';
import './SignFormField.scss';

const SignFormField = ({ label, inputType, fieldId }) => (
  <div className="sign-form__field sign-form-field">
    <label className="sign-form-field__label" htmlFor={fieldId}>{label}</label>
    <input type={inputType} className="sign-form-field__input sign-form__text" id={fieldId} required placeholder={label} />
    <p className="sign-form-field__error">Что-то пошло не так</p>
  </div>
);
export default SignFormField;
