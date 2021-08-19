import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.scss';

const MoviesCardList = () => (
  <ul className="movies__card-list">
    <MoviesCard saved />
    <MoviesCard />
    <MoviesCard saved />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard saved />
    <MoviesCard />
    <MoviesCard saved />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
  </ul>
);

export default MoviesCardList;
