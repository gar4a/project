import React from "react";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import ShoppingCart from "../Pages/ShoppingCart";
import Infos from "../Pages/Infos";

import { Route, Switch, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const AppRouter = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && <Navbar />}
      {location.pathname !== "/login" && <Carousel />}
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Home} path="/home" />
        <Route component={ShoppingCart} path="/cart" />
        <Route component={Infos} path="/infos/:id" />
      </Switch>
    </div>
  );
};
export default AppRouter;
