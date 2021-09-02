import React from 'react';
import useFormWithValidation from '../../utils/hooks/useFormValidation';
import SignForm from '../SignForm/SignForm';
import SignFormField from '../SignForm/SignFormField/SignFormField';

import './Register.scss';

const Register = ({ onSubmit }) => {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    resetForm();
  };

  return (
    <section className="register section section_type_sign">
      <SignForm
        title="Добро пожаловать!"
        text="Уже зарегистрированы?"
        linkText="Войти"
        linkTo="/signin"
        buttonText="Зарегистрироваться"
        onSubmit={handleSubmit}
        formName="register"
        fieldsValues={values}
        fieldsErrors={errors}
        formValidity={isValid}
        onFieldChange={handleChange}
      >
        <SignFormField
          label="Имя"
          inputType="text"
          fieldId="name"
          value={values.name || ''}
          onChange={handleChange}
          isValid={isValid}
          errorMessage={errors.name}
          min="2"
          max="30"
        />
      </SignForm>
    </section>
  );
};

export default Register;
