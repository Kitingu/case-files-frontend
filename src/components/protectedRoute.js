import React from "react";
import { isLoggedIn } from '../utils/authHelper';
import { useLocation, Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const isAuthenticated = isLoggedIn();
  console.log('============>', isAuthenticated);

  return <Route
    render={props => ({
        "1": <Component {...props} />,
        "0": <Redirect
          to={{ pathname: "/login", state: { from: location } }}
        />
      }[`${isAuthenticated * 1}`]
    )}
    {...rest}
  />
}
export default PrivateRoute;