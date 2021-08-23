import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button type="button" onClick={history.goBack} className="not-found__button">Назад</button>
    </div>
  );
};

export default NotFound;
