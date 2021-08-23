import React from 'react';
import './Main.scss';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProjects from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

const Main = () => (
  <main className="main">
    <Promo />
    <NavTab />
    <AboutProjects />
    <Techs />
    <AboutMe />
    <Portfolio />
  </main>
);

export default Main;
