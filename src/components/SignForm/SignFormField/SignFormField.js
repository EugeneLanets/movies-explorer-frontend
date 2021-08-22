import React, { useState } from 'react';
import './SignFormField.scss';

const SignFormField = ({ label, inputType, fieldId }) => {
  const [fieldValue, setFieldValue] = useState('');
  const handleChange = (evt) => {
    setFieldValue(evt.target.value);
  };

  return (
    <div className="sign-form__field sign-form-field">
      <label className="sign-form-field__label" htmlFor={fieldId}>{label}</label>
      <input
        type={inputType}
        className="sign-form-field__input sign-form__text"
        id={fieldId}
        required
        placeholder={label}
        value={fieldValue}
        onChange={handleChange}
        name={fieldId}
      />
      <p className="sign-form-field__error">Что-то пошло не так</p>
    </div>
  );
};
export default SignFormField;
