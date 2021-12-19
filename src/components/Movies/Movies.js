import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';
import './Movies.scss';
import Preloader from '../Preloader/Preloader';
import useCurrentWidth from '../../utils/hooks/useCurrentWidth';

const Movies = ({
  movies,
  savedMovies,
  onMovieSave,
  onSearch,
  showShorts,
  onShortsCheck,
  query,
}) => {
  const { startCardsQuantity, cardsPerLine } = useCurrentWidth();
  const [shownMoviesQuantity, setShownMoviesQuantity] = useState(startCardsQuantity);
  const showMore = movies.length > shownMoviesQuantity;
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    setShownMoviesQuantity(shownMoviesQuantity + cardsPerLine);
  };

  useEffect(() => {
    setShownMoviesQuantity(startCardsQuantity);
  }, [startCardsQuantity]);
  return (
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
              movies={movies.slice(0, shownMoviesQuantity)}
              onMovieButtonClick={onMovieSave}
              savedMovies={savedMovies}
            />
          )}
        {showMore && (
        <Button
          className="movies__button"
          text="Ещё"
          onClick={handleButtonClick}
        />
        )}

      </div>

    </section>
  );
};

export default Movies;
