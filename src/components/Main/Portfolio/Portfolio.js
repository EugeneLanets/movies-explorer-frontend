import React from 'react';
import './Portfolio.scss';

const Portfolio = () => (
  <section className="portfolio section">
    <div className="container">
      <h2 className="section__heading section__heading_small">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__links-item">
          <a href="./index.html#" className="portfolio__link">Статичный сайт</a>
        </li>
        <li className="portfolio__links-item">
          <a href="./index.html#" className="portfolio__link">Адаптивный сайт</a>
        </li>
        <li className="portfolio__links-item">
          <a href="./index.html#" className="portfolio__link">Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  </section>
);

export default Portfolio;
