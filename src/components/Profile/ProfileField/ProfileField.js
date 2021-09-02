import React from 'react';
import './ProfileField.scss';

const ProfileField = ({
  labelName, fieldName, fieldId, fieldType, min, max, fieldValue,
  value, onFieldChange, formValidity, error,
}) => (
  <label htmlFor={fieldId} className="profile__field">
    {labelName}
    <input
      type={fieldType}
      name={fieldName}
      id={fieldId}
      className="profile__input"
      required
      value={value === undefined ? fieldValue : value}
      onChange={onFieldChange}
      maxLength={max}
      minLength={min}
    />
    <p className={`profile__error${!formValidity ? ' profile__error_active' : ''}`}>
      {error}
    </p>
  </label>

);

export default ProfileField;
