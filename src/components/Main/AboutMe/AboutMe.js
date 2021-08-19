import React from 'react';
import photo from '../../../images/photo.jpg';
import './AboutMe.scss';

const AboutMe = () => (
  <section className="about-me section" id="about-me">
    <div className="container">
      <h2 className="section__heading">
        Студент
      </h2>
      <div className="section__inner about-me__inner">
        <div className="about-me__content">
          <p className="section__title about-me__title">Виталий</p>
          <p className="section__lead">Фронтенд-разработчик, 30 лет</p>
          <p className="section__paragraph about-me__paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб‑разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.

          </p>
          <ul className="about-me__links">
            <li className="about-me__links-item">
              <a href="https://facebook.com" className="about-me__link">Facebook</a>
            </li>
            <li className="about-me__links-item">
              <a href="https://github.com" className="about-me__link">Github</a>
            </li>
          </ul>
        </div>
        <img src={photo} alt="Фото Виталия" className="about-me__photo" />
      </div>
    </div>
  </section>
);

export default AboutMe;
