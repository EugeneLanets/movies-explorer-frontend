import React from 'react';
import SignForm from '../SignForm/SignForm';
import './Login.scss';

const Login = () => (
  <section className="login section section_type_sign">
    <SignForm
      title="Рады видеть!"
      text="Ещё не зарегистрированы?"
      linkText="Зарегистрироваться"
      linkTo="/signup"
      buttonText="Войти"
    />
  </section>
);

export default Login;
