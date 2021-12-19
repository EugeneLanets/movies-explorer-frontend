/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './FilterCheckbox.scss';

const FilterCheckbox = ({ onChange, showShorts }) => (
  <>
    <input
      type="checkbox"
      name="short"
      id="filter"
      className="search-form__checkbox"
      onChange={onChange}
      checked={showShorts}
    />

    <label htmlFor="filter" className="search-form__filter">
      Короткометражки
    </label>
  </>
);

export default FilterCheckbox;
