const SHORT_MOVIE_DURATION = 40;

const DESKTOP_MOVIES = {
  startCardsQuantity: 12,
  cardsPerLine: 3,
};

const TABLET_MOVIES = {
  startCardsQuantity: 8,
  cardsPerLine: 2,
};

const MOBILE_MOVIES = {
  startCardsQuantity: 5,
  cardsPerLine: 2,
};

const MOVIES_CARDS_SETTINGS = {
  desktop: {
    resolution: 1280,
    settings: DESKTOP_MOVIES,
  },
  tablet: {
    resolution: 768,
    settings: TABLET_MOVIES,
  },
  mobile: {
    resolution: 320,
    settings: MOBILE_MOVIES,
  },
};
export {
  SHORT_MOVIE_DURATION, MOVIES_CARDS_SETTINGS,
};
