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

const App = () => {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpened, setMenuOpened] = useState(false);

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
    movieApi.get()
      .then((response) => {
        setMovies(response);
        localStorage.setItem('movies', JSON.stringify(response));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkLocalStorage = () => {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    const localFiltered = JSON.parse(localStorage.getItem('filteredMovies'));
    const localQuery = localStorage.getItem('movieQuery');
    const localShorts = JSON.parse(localStorage.getItem('showShorts'));

    if (!localMovies) {
      getMoviesFromRemote();
    } else {
      setMovies(localMovies);
    }

    if (localQuery) {
      setMovieQuery(localQuery);
      setFilteredMovies(localFiltered);
      setShowShorts(localShorts);
    }
  };

  const handleCheckToken = () => {
    mainApi.checkToken()
      .then((incomingUserData) => {
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

  const handleLogin = (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    mainApi.login({
      email, password,
    })
      .then(async (res) => {
        await handleCheckToken();
        history.push('/movies');
      })
      .catch((err) => { console.log('Error', err); });
  };

  const handleRegister = (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const userName = formData.get('name');

    mainApi.register({
      email, password, name: userName,
    })
      .then(() => {
        handleLogin(formData);
      })
      .catch((err) => { console.log('Error', err); });
  };

  const handleLogout = () => {
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        setLoading(true);
        history.push('/');
      })
      .catch((err) => { console.log('Error', err); });
  };

  const handleUpdateUserInfo = (userInfo) => {
    mainApi.update(userInfo)
      .then((incomingUserInfo) => {
        setCurrentUser(incomingUserInfo);
      })
      .catch((err) => { console.log('Error', err); });
  };

  const getSavedMovies = () => {
    mainApi.getSavedMovies()
      .then((response) => {
        setSavedMovies(response);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <Register onSubmit={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login onSubmit={handleLogin} />
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
