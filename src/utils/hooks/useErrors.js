import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState({});

  const addError = (error, name) => {
    setErrors({ ...errors, [name]: error });
  };

  const removeError = (name) => {
    setErrors({ ...errors, [name]: undefined });
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    errors, addError, removeError, clearErrors,
  };
}
