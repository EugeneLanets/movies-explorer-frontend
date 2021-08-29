import React, { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import './Profile.scss';
import ProfileField from './ProfileField/ProfileField';
import ProfileFooter from './ProfileFooter/ProfileFooter';

const Profile = ({ onLogout, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);

  const { name: defaultName, email: defaultEmail } = useContext(CurrentUserContext);
  const handleProfileUpdate = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const name = formData.get('name');
    const email = formData.get('email');

    onUpdate({ name, email });
    setEditing(false);
  };

  const handleProfileEditing = (evt) => {
    const formData = new FormData(evt.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');

    setEditing(!(name === defaultName && email === defaultEmail));
  };

  return (
    <section className="profile section">
      <h2 className="profile__title">
        Привет,
        {' '}
        {defaultName}
        !
      </h2>
      <form
        action=""
        className="profile__form"
        name="profile"
        onSubmit={handleProfileUpdate}
        onChange={handleProfileEditing}
      >
        <ProfileField
          fieldName="name"
          fieldId="name"
          fieldType="text"
          labelName="Имя"
          fieldValue={defaultName}
        />
        <ProfileField
          fieldName="email"
          fieldId="email"
          fieldType="email"
          labelName="E-mail"
          fieldValue={defaultEmail}
        />
        <ProfileFooter onLogout={onLogout} isEditing={isEditing} />
      </form>
    </section>
  );
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
