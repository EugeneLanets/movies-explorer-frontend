import React from 'react';
import SignForm from '../SignForm/SignForm';
import SignFormField from '../SignForm/SignFormField/SignFormField';

import './Register.scss';

const Register = ({ onSubmit }) => (
  <section className="register section section_type_sign">
    <SignForm
      title="Добро пожаловать!"
      text="Уже зарегистрированы?"
      linkText="Войти"
      linkTo="/signin"
      buttonText="Зарегистрироваться"
      onSubmit={onSubmit}
      formName="register"
    >
      <SignFormField label="Имя" inputType="text" fieldId="name" />
    </SignForm>
  </section>
);

export default Register;
