import React from 'react';
import { useLocation } from 'react-router';
import Icon from '../Icon/Icon';
import './MoviesCard.scss';

import { movieCoverPrefix } from '../../utils/config';

const MoviesCard = ({ movie, savedMovies, onClick }) => {
  const savedMovie = useLocation().pathname === '/saved-movies';
  const isSaved = savedMovie ? false : savedMovies.find(({ movieId }) => movieId === movie.id);
  const prefix = savedMovie ? '' : movieCoverPrefix;

  const duration = `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;

  const handleMovieSave = (evt) => {
    evt.preventDefault();
    onClick(movie, savedMovie ? movie : isSaved);
  };

  return (
    <li className="movies__card-list-item">
      <a
        href={movie.trailerLink || movie.trailer}
        className="movies__card-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <article className="movies__card">
          <header className="movies__card-header">
            <h3 className="movies__card-title">{movie.nameRU}</h3>
            <p className="movies__card-duration">
              {duration}
            </p>
            <button
              className={`movies__card-button${isSaved ? ' movies__card-button_active' : ''}`}
              type="button"
              onClick={handleMovieSave}
            >
              <Icon
                className={`movies__card-icon${isSaved ? ' movies__card-icon_active' : ''}${savedMovie ? ' movies__card-icon_delete' : ''}`}
                iconId={savedMovie ? 'close-icon' : 'fav-icon'}
              />
            </button>
          </header>
          <img
            src={`${prefix}${movie.image.url || movie.image}`}
            alt={`Обложка для фильма "${movie.nameRU}"`}
            className="movies__card-cover"
          />
        </article>
      </a>
    </li>
  );
};

export default MoviesCard;
