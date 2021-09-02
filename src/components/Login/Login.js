import React from 'react';
import useFormWithValidation from '../../utils/hooks/useFormValidation';
import SignForm from '../SignForm/SignForm';
import Preloader from '../Preloader/Preloader';
import './Login.scss';

const Login = ({ onSubmit, error, loading }) => {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  };

  return (
    <section className="login section section_type_sign">
      {loading && <Preloader fullscreen />}
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
        error={error}
      />
    </section>
  );
};

export default Login;
