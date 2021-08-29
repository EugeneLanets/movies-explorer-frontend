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

const App = () => {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const location = useLocation().pathname;
  const isSignPage = location === '/signup' || location === '/signin';
  const isProfilePage = location === '/profile';
  const isNotFoundPage = location === '/404';

  const handleMenuOpen = () => {
    setMenuOpened(!isMenuOpened);
  };

  const handleCheckToken = () => {
    mainApi.checkToken()
      .then((incomingUserData) => {
        setCurrentUser(incomingUserData);
        setLoggedIn(true);
      })
      .catch((err) => { console.log('Error', err); });
  };

  const handleLogin = (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    mainApi.login({
      email, password,
    })
      .then((res) => {
        handleCheckToken();
      })
      .then(() => {
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
    if (localStorage.getItem('movies') === null) {
      getMoviesFromRemote();
    } else {
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
  };

  const getMovies = () => {
    mainApi.getSavedMovies()
      .then((response) => {
        setSavedMovies(response);
      })
      .catch((err) => {
        console.log(err);
      });
    if (loggedIn) {
      checkLocalStorage();
    }
  };

  const handleToggleMovieSave = (movie, savedMovie) => {
    if (!savedMovie) {
      console.log('Save');
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

  useEffect(handleCheckToken, [history]);
  useEffect(getMovies, [loggedIn]);

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
          />
          )}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={movies.slice(0, 3)}
            savedMovies={savedMovies}
            onMovieSave={handleToggleMovieSave}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={savedMovies}
            onMovieDelete={handleToggleMovieSave}
          />

          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onUpdate={handleUpdateUserInfo}
          />

          <Route path="/signup">
            <Register onSubmit={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login onSubmit={handleLogin} />
          </Route>

          <ProtectedRoute
            exact
            path="/404"
            component={NotFound}
            loggedIn={loggedIn}
          />

          <Redirect to="/404" />
        </Switch>
        {!isNotFoundPage && !isSignPage && !isProfilePage && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
