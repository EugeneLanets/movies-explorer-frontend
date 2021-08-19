import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.scss';

const SearchForm = () => (
  <form className="search-form">
    <div className="search-form__field">
      <input
        type="text"
        className="search-form__input"
        placeholder="Фильм"
      />
      <button type="submit" className="search-form__submit">Найти</button>
    </div>
    <FilterCheckbox />
  </form>
);

export default SearchForm;
