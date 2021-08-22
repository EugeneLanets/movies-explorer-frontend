import React from 'react';
import SignForm from '../SignForm/SignForm';
import './Login.scss';

const Login = ({ onSubmit }) => (
  <section className="login section section_type_sign">
    <SignForm
      title="Рады видеть!"
      text="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkTo="/signup"
      buttonText="Войти"
      onSubmit={onSubmit}
      formName="login"
    />
  </section>
);

export default Login;
