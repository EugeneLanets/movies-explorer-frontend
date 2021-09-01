import React from 'react';
import './Preloader.scss';

const Preloader = ({ fullscreen }) => (
  <div className={`preloader${fullscreen ? ' preloader_fullscreen' : ''}`}>
    <div className="preloader__container">
      <div className="preloader__round" />
    </div>
  </div>
);

export default Preloader;
