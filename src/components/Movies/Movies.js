import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';
import './Movies.scss';

const Movies = ({ movies, savedMovies, onMovieSave }) => (
  <section className="movies section">
    <div className="container">
      <SearchForm />
      <MoviesCardList
        movies={movies}
        onMovieButtonClick={onMovieSave}
        savedMovies={savedMovies}
      />
      <Button className="movies__button" text="Ещё" />
    </div>

  </section>
);

Movies.propTypes = {};

Movies.defaultProps = {};

export default Movies;
