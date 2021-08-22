import React from 'react';
import './ProfileField.scss';

const ProfileField = ({
  labelName, fieldName, fieldId, fieldType, fieldValue,
}) => (
  <label htmlFor={fieldId} className="profile__field">
    {labelName}
    <input
      type={fieldType}
      name={fieldName}
      defaultValue={fieldValue}
      id={fieldId}
      className="profile__input"
      required
    />
  </label>
);

export default ProfileField;
