import React from 'react';
import './SignFormField.scss';

const SignFormField = ({
  label, inputType, fieldId, value, onChange, isValid, errorMessage, pattern, min, max,
}) => (
  <div className="sign-form__field sign-form-field">
    <label className="sign-form-field__label" htmlFor={fieldId}>{label}</label>
    <input
      type={inputType}
      className="sign-form-field__input sign-form__text"
      id={fieldId}
      required
      placeholder={label}
      value={value || ''}
      onChange={onChange}
      name={fieldId}
      pattern={pattern}
      minLength={min}
      maxLength={max}
    />
    <p className={`sign-form-field__error${!isValid ? ' sign-form-field__error_active' : ''}`}>
      {errorMessage}
    </p>
  </div>
);
export default SignFormField;
