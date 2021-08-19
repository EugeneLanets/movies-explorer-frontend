import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMoviesList.scss';

const SavedMoviesList = () => (
  <ul className="movies__card-list">
    <MoviesCard cardType="saved" />
    <MoviesCard cardType="saved" />
    <MoviesCard cardType="saved" />
  </ul>
);

export default SavedMoviesList;
