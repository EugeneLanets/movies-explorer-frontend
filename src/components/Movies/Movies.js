import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';
import './Movies.scss';
import Preloader from '../Preloader/Preloader';

const Movies = ({
  movies,
  savedMovies,
  onMovieSave,
  onSearch,
  showShorts,
  onShortsCheck,
  query,
}) => (
  <section className="movies section">
    <div className="container">
      <SearchForm
        onSubmit={onSearch}
        showShorts={showShorts}
        onShortsCheck={onShortsCheck}
        query={query}
      />
      {movies.length === 0 && !query
        ? <Preloader />
        : (
          <MoviesCardList
            movies={movies}
            onMovieButtonClick={onMovieSave}
            savedMovies={savedMovies}
          />
        )}
      {false && <Button className="movies__button" text="Ещё" />}

    </div>

  </section>
);

Movies.propTypes = {};

Movies.defaultProps = {};

export default Movies;
