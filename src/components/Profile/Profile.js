import React from 'react';

import './Profile.scss';
import ProfileField from './ProfileField/ProfileField';
import ProfileFooter from './ProfileFooter/ProfileFooter';

const Profile = ({ name }) => (
  <section className="profile section">
    <h2 className="profile__title">
      Привет,
      {' '}
      {name}
      !
    </h2>
    <form action="" className="profile__form" name="profile">
      <ProfileField
        fieldName="name"
        fieldId="name"
        fieldType="text"
        labelName="Имя"
        fieldValue={name}
      />
      <ProfileField
        fieldName="email"
        fieldId="email"
        fieldType="email"
        labelName="E-mail"
        fieldValue="pochta@yandex.ru"
      />
      <ProfileFooter />
    </form>
  </section>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
