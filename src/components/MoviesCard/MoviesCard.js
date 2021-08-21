import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import './MoviesCard.scss';

const MoviesCard = ({ saved, cardType }) => {
  const [isSaved, setSaved] = useState(saved);
  const deleteCard = cardType === 'saved';
  const name = '33 слова о дизайне';
  return (
    <li>
      <article className="movies__card">
        <header className="movies__card-header">
          <h3 className="movies__card-title">{name}</h3>
          <p className="movies__card-duration">1ч 47м</p>
          <button
            className={`movies__card-button${isSaved ? ' movies__card-button_active' : ''}`}
            type="button"
            onClick={() => setSaved(!isSaved)}
          >
            <Icon
              className={`movies__card-icon${isSaved ? ' movies__card-icon_active' : ''}${deleteCard ? ' movies__card-icon_delete' : ''}`}
              iconId={deleteCard ? 'close-icon' : 'fav-icon'}
            />
          </button>
        </header>
        <img src="https://via.placeholder.com/364x203.png" alt={`Обложка для фильма "${name}"`} className="movies__card-cover" />
      </article>

    </li>
  );
};

export default MoviesCard;
