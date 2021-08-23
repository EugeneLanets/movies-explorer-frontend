/* eslint-disable no-unused-vars */
import './App.scss';
import { useState } from 'react';
import {
  Redirect, Route, Switch, useLocation,
} from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const location = useLocation().pathname;
  const isSignPage = location === '/signup' || location === '/signin';
  const isProfilePage = location === '/profile';
  const isNotFoundPage = location === '/404';

  const handleMenuOpen = () => {
    setMenuOpened(!isMenuOpened);
  };

  return (
    <div className="app">
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
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile name="Виталий" />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
      {!isNotFoundPage && !isSignPage && !isProfilePage && <Footer />}
    </div>
  );
};

export default App;
