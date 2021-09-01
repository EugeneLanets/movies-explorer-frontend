import React, { useRef } from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.scss';

const SearchForm = ({
  onSubmit, showShorts, onShortsCheck, query,
}) => {
  const formField = useRef();
  const handleInputFocus = (ref, className) => {
    ref.current.classList.add(className);
  };
  const handleInputBlur = (ref, className) => {
    ref.current.classList.remove(className);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const searchQuery = formData.get('movie');
    onSubmit(searchQuery);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} name="search">
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
          name="movie"
          defaultValue={query}
        />
        <button type="submit" className="search-form__submit">Найти</button>
      </label>
      <FilterCheckbox
        onChange={onShortsCheck}
        showShorts={showShorts}
      />
    </form>
  );
};

export default SearchForm;
