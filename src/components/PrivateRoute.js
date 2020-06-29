import { Route as R, Redirect as RD } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <R
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <RD to="/login" />
      )
    }
  ></R>
);
export default PrivateRoute;
