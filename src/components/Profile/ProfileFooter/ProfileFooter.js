import React from 'react';
import './ProfileFooter.scss';

const ProfileFooter = () => (
  <footer className="profile__footer">
    <button type="submit" className="profile__button">Редактировать</button>
    <button type="button" className="profile__button profile__button_logout">Выйти из аккаунта</button>
  </footer>
);

export default ProfileFooter;
