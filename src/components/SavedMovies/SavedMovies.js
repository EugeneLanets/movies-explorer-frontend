import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';

import './SavedMovies.scss';

const SavedMovies = () => (
  <section className="movies section">
    <div className="container">
      <SearchForm />
      <SavedMoviesList />
    </div>

  </section>
);

export default SavedMovies;
