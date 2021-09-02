/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './App.scss';
import { useEffect, useState } from 'react';
import {
  Redirect, Route, Switch, useHistory, useLocation,
} from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute';

import mainApi from '../../utils/API/mainApi';
import movieApi from '../../utils/API/movieApi';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';
import useErrors from '../../utils/hooks/useErrors';

const App = () => {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpened, setMenuOpened] = useState(false);

  const { errors, addError, removeError } = useErrors();

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [showShorts, setShowShorts] = useState(false);
  const [movieQuery, setMovieQuery] = useState('');

  const location = useLocation().pathname;
  const isSignPage = location === '/signup' || location === '/signin';
  const isProfilePage = location === '/profile';
  const isNotFoundPage = location === '/404';

  const handleMenuOpen = () => {
    setMenuOpened(!isMenuOpened);
  };

  const getMoviesFromRemote = () => {
    setLoading(true);
    movieApi.get()
      .then((response) => {
        setMovies(response);
        localStorage.setItem('movies', JSON.stringify(response));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const checkMovies = (localMovies) => {
    if (!localMovies) {
      getMoviesFromRemote();
    } else {
      setMovies(localMovies);
    }
  };

  const checkSavedSearch = (query, moviesList, showShortMovies) => {
    if (query) {
      setMovieQuery(query);
      setFilteredMovies(moviesList);
      setShowShorts(showShortMovies);
    }
  };

  const checkLocalStorage = () => {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    const localFiltered = JSON.parse(localStorage.getItem('filteredMovies'));
    const localQuery = localStorage.getItem('movieQuery');
    const localShorts = JSON.parse(localStorage.getItem('showShorts'));

    checkMovies(localMovies);
    checkSavedSearch(localQuery, localFiltered, localShorts);
  };

  const handleCheckToken = () => {
    mainApi.checkToken()
      .then(async (incomingUserData) => {
        setCurrentUser(incomingUserData);
        setLoggedIn(true);
        checkLocalStorage();
        if (location === '/movies' || location === '/saved-movies' || location === '/profile') {
          history.push(location);
        }
      })
      .catch((err) => { console.log('Error', err); })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogin = (values) => {
    setLoading(true);
    const name = 'login';
    removeError(name);
    const { email, password } = values;
    mainApi.login({ email, password })
      .then(async (res) => {
        await handleCheckToken();
        history.push('/movies');
      })
      .catch((err) => {
        addError(err, name);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRegister = (values) => {
    setLoading(true);
    const name = 'register';
    removeError(name);
    mainApi.register(values)
      .then(() => {
        handleLogin(values);
      })
      .catch((err) => {
        addError(err, name);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    setLoading(true);
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        setLoading(true);
        setFilteredMovies([]);
        setMovieQuery([]);
        setShowShorts([]);
        localStorage.clear();
        history.push('/');
      })
      .catch((err) => { console.log('Error', err); })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUpdateUserInfo = (userInfo) => {
    setLoading(true);
    mainApi.update(userInfo)
      .then((incomingUserInfo) => {
        setCurrentUser(incomingUserInfo);
      })
      .catch((err) => { console.log('Error', err); })
      .finally(() => {
        setLoading(false);
      });
  };

  const getSavedMovies = () => {
    if (loggedIn) {
      mainApi.getSavedMovies()
        .then((response) => {
          setSavedMovies(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleToggleMovieSave = (movie, savedMovie) => {
    console.log(savedMovie);
    if (!savedMovie) {
      mainApi.saveMovie(movie)
        .then((resp) => {
          setSavedMovies([...savedMovies, resp]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (savedMovie) {
      mainApi.deleteMovie(savedMovie._id)
        .then((resp) => {
          setSavedMovies(savedMovies.filter(({ _id }) => _id !== resp._id));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const filterMovies = (moviesList, shorts, query) => moviesList.filter(({ duration, nameEN, nameRU }) => {
    const filterByDuration = shorts
      ? duration <= SHORT_MOVIE_DURATION
      : true;
    const matchRU = nameRU
      ? nameRU.toLowerCase().includes(query.toLowerCase())
      : false;
    const matchEN = nameEN
      ? nameEN.toLowerCase().includes(query.toLowerCase())
      : false;
    return filterByDuration && (matchRU || matchEN);
  });

  const handleMoviesSearch = async (searchString) => {
    const filtered = filterMovies(movies, showShorts, searchString);

    localStorage.setItem('user', JSON.stringify(currentUser));
    localStorage.setItem('movieQuery', searchString);
    localStorage.setItem('showShorts', showShorts);
    localStorage.setItem('filteredMovies', JSON.stringify(filtered));

    setMovieQuery(searchString);
    setFilteredMovies(filtered);
  };

  const handleSearchShorts = () => {
    setShowShorts(!showShorts);
  };

  useEffect(handleCheckToken, []);
  useEffect(getSavedMovies, [loggedIn]);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        {!isNotFoundPage
          && (
          <Header
            onMenuClick={handleMenuOpen}
            menuOpened={isMenuOpened}
            loggedIn={loggedIn}
            isSignPage={isSignPage}
            isMenuOpen={isMenuOpened}
            loading={loading}
          />
          )}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signup">
            <Register onSubmit={handleRegister} error={errors?.register} loading={loading} />
          </Route>
          <Route path="/signin">
            <Login onSubmit={handleLogin} error={errors?.login} loading={loading} />
          </Route>

          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={filteredMovies}
            savedMovies={savedMovies}
            onMovieSave={handleToggleMovieSave}
            onSearch={handleMoviesSearch}
            showShorts={showShorts}
            onShortsCheck={handleSearchShorts}
            query={movieQuery}
            loading={loading}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={savedMovies}
            onMovieDelete={handleToggleMovieSave}
            loading={loading}
            onSearch={filterMovies}
          />

          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onUpdate={handleUpdateUserInfo}
            loading={loading}
          />

          <ProtectedRoute
            exact
            path="/404"
            component={NotFound}
            loggedIn={loggedIn}
            loading={loading}
          />
          <Route exact path="/preloader">
            <Preloader fullscreen />
          </Route>

          <Redirect to="/404" />
        </Switch>
        {!isNotFoundPage && !isSignPage && !isProfilePage && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
