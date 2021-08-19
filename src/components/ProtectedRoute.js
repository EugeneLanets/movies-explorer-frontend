/* eslint-disable react/jsx-props-no-spreading */
import { Redirect, Route } from 'react-router';

const ProtectedRoute = ({ loggedIn, component: Component, ...props }) => (
  <Route>
    { () => (loggedIn ? <Component {...props} /> : <Redirect to="./login" />)}
  </Route>
);

export default ProtectedRoute;
