import React from 'react';
import './Techs.scss';

const Techs = () => (
  <section className="techs section" id="techs">
    <div className="container">
      <h2 className="section__heading">Технологии</h2>
      <div className="section__inner techs__content">
        <p className="section__title">7 технологий</p>
        <p className="section__paragraph techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Techs;
