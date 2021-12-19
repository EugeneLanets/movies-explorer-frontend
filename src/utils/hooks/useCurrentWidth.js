import { useEffect, useState } from 'react';
import { MOVIES_CARDS_SETTINGS } from '../constants';

export default function useCurrentWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  let settings;

  if (MOVIES_CARDS_SETTINGS.mobile.resolution <= width) {
    settings = MOVIES_CARDS_SETTINGS.mobile.settings;
  }

  if (MOVIES_CARDS_SETTINGS.tablet.resolution <= width) {
    settings = MOVIES_CARDS_SETTINGS.tablet.settings;
  }

  if (MOVIES_CARDS_SETTINGS.desktop.resolution <= width) {
    settings = MOVIES_CARDS_SETTINGS.desktop.settings;
  }

  return settings;
}
