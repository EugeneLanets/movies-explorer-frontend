import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__about">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__info">
        <span className="footer__copyright">&copy; 2021</span>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a href="https://praktikum.yandex.ru" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a href="https://github.com" className="footer__link">Github</a>
          </li>
          <li className="footer__links-item">
            <a href="https://facebook.com" className="footer__link">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
