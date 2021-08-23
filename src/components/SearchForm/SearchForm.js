import React, { useRef } from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.scss';

const SearchForm = () => {
  const formField = useRef();
  const handleInputFocus = (ref, className) => {
    ref.current.classList.add(className);
  };
  const handleInputBlur = (ref, className) => {
    ref.current.classList.remove(className);
  };

  return (
    <form className="search-form">
      <label htmlFor="search" className="search-form__field" ref={formField}>
        <input
          id="search"
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          onFocus={() => handleInputFocus(formField, 'search-form__field_focus')}
          onBlur={() => handleInputBlur(formField, 'search-form__field_focus')}
          required
          min="2"
          max="30"
        />
        <button type="submit" className="search-form__submit">Найти</button>
      </label>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
