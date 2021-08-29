import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.scss';

const SavedMovies = ({ movies, onMovieDelete }) => (
  <section className="movies section">
    <div className="container">
      <SearchForm />
      <MoviesCardList
        movies={movies}
        onMovieButtonClick={onMovieDelete}
      />
    </div>

  </section>
);

export default SavedMovies;
