import React from 'react';
import './ProfileFooter.scss';

const ProfileFooter = ({ onLogout, isEditing }) => (
  <footer className="profile__footer">
    <button
      type="submit"
      className="profile__button"
      disabled={!isEditing}
    >
      Редактировать

    </button>
    <button
      type="button"
      className="profile__button profile__button_logout"
      onClick={onLogout}
    >
      Выйти из аккаунта
    </button>
  </footer>
);

export default ProfileFooter;
