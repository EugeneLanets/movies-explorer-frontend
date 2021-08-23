import React from 'react';
import './NavTab.scss';

const NavTab = () => (
  <section className="nav-tab section section_type_small" aria-label="Навигация по странице 'О проекте'">
    <div className="container">
      <ul className="nav-tab__list">
        <li className="nav-tab__list-item">
          <a href="#about-project" className="nav-tab__link">О проекте</a>
        </li>
        <li className="nav-tab__list-item">
          <a href="#techs" className="nav-tab__link">Технологии</a>
        </li>
        <li className="nav-tab__list-item">
          <a href="#about-me" className="nav-tab__link">Студент</a>
        </li>
      </ul>
    </div>
  </section>
);

export default NavTab;
