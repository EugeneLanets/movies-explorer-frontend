/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './FilterCheckbox.scss';

const FilterCheckbox = () => (
  <>
    <input
      type="checkbox"
      name="filter"
      id="filter"
      className="search-form__checkbox"
    />

    <label htmlFor="filter" className="search-form__filter">
      Короткометражки
    </label>
  </>
);

export default FilterCheckbox;
