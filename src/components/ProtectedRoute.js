/* eslint-disable react/jsx-props-no-spreading */
import { Redirect, Route } from 'react-router';
import Preloader from './Preloader/Preloader';

const ProtectedRoute = ({
  loggedIn, loading, component: Component, ...props
}) => {
  if (loading) {
    return <Preloader fullscreen />;
  }
  return (
    <Route>
      {
    () => (loggedIn ? <Component {...props} /> : <Redirect to="./" />)
}
    </Route>
  );
};

export default ProtectedRoute;
