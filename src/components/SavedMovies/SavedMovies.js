import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.scss';

const SavedMovies = ({ movies, onMovieDelete, onSearch }) => {
  const [showShorts, setShowShorts] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(false);
  const [query, setQuery] = useState('');

  const handleShortsCheck = () => {
    setShowShorts(!showShorts);
  };

  const handleSearch = (searchString) => {
    setQuery(searchString);
    setFilteredMovies(onSearch(movies, showShorts, searchString));
  };

  return (
    <section className="movies section">
      <div className="container">
        <SearchForm
          onSubmit={handleSearch}
          onShortsCheck={handleShortsCheck}
          showShorts={showShorts}
        />
        <MoviesCardList
          movies={query ? filteredMovies : movies}
          onMovieButtonClick={onMovieDelete}
        />
      </div>

    </section>
  );
};

export default SavedMovies;
