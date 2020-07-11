import React from "react";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import ShoppingCart from "../Pages/ShoppingCart";
import Infos from "../Pages/Infos";
import Commandes from "../Pages/Commande/Commandes";

import { Route, Switch, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import PrivateRoute from "../components/PrivateRoute";

const AppRouter = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && <Navbar />}
      {location.pathname !== "/login" && <Carousel />}
      <Switch>
        <Route component={Login} path="/login" />
        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={ShoppingCart} path="/cart" />
        <PrivateRoute component={Infos} path="/infos/:id" />
        <PrivateRoute component={Commandes} path="/commandes/" />
      </Switch>
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
};
export default AppRouter;
