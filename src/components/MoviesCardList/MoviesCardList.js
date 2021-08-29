import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.scss';

const MoviesCardList = ({ movies, savedMovies, onMovieSave }) => (
  <ul className="movies__card-list">
    {movies.map((movie) => (
      <MoviesCard
        movie={movie}
        onClick={onMovieSave}
        key={movie.id}
        savedMovies={savedMovies}
      />
    ))}
  </ul>
);

export default MoviesCardList;
