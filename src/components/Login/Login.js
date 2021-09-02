import React from 'react';
import useFormWithValidation from '../../utils/hooks/useFormValidation';
import SignForm from '../SignForm/SignForm';
import './Login.scss';

const Login = ({ onSubmit }) => {
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
    <section className="login section section_type_sign">
      <SignForm
        title="Рады видеть!"
        text="Ещё не зарегистрированы?"
        linkText="Регистрация"
        linkTo="/signup"
        buttonText="Войти"
        onSubmit={handleSubmit}
        formName="login"
        fieldsValues={values}
        fieldsErrors={errors}
        formValidity={isValid}
        onFieldChange={handleChange}
      />
    </section>
  );
};

export default Login;
