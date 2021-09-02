import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../utils/hooks/useFormValidation';

import './Profile.scss';
import ProfileField from './ProfileField/ProfileField';
import ProfileFooter from './ProfileFooter/ProfileFooter';

const Profile = ({ onLogout, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);

  const {
    values,
    errors,
    isValid,
    handleChange,
    setForm,
  } = useFormWithValidation({});

  const { name: defaultName, email: defaultEmail } = useContext(CurrentUserContext);

  const handleProfileUpdate = (evt) => {
    evt.preventDefault();
    onUpdate(values);
    setEditing(false);
  };

  const handleProfileEditing = () => {
    setEditing(!(values.name === defaultName && values.email === defaultEmail));
  };

  useEffect(() => {
    setForm({ name: defaultName, email: defaultEmail });
  }, []);

  useEffect(handleProfileEditing, [values]);

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
      >
        <ProfileField
          fieldName="name"
          fieldId="name"
          fieldType="text"
          labelName="Имя"
          value={values.name}
          error={errors.name}
          fieldValue={defaultName}
          formValidity={isValid}
          onFieldChange={handleChange}
          min="2"
          max="30"
        />
        <ProfileField
          fieldName="email"
          fieldId="email"
          fieldType="email"
          labelName="E-mail"
          value={values.email}
          error={errors.email}
          fieldValue={defaultEmail}
          formValidity={isValid}
          onFieldChange={handleChange}
        />
        <ProfileFooter onLogout={onLogout} isEditing={isEditing && isValid} />
      </form>
    </section>
  );
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
