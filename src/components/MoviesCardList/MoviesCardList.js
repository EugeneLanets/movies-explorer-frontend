import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.scss';

const MoviesCardList = ({ movies, savedMovies, onMovieButtonClick }) => (
  <ul className="movies__card-list">
    {movies.map((movie) => (
      <MoviesCard
        movie={movie}
        onClick={onMovieButtonClick}
        key={movie.id}
        savedMovies={savedMovies}
      />
    ))}
  </ul>
);

export default MoviesCardList;
