import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import "./index.css";
import "./bootstrap.min.css"
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import AppRouter from "./containers/AppRouter";
import "../node_modules/font-awesome/css/font-awesome.min.css";


const App = () => {
  return (
    <div>
      <BrowserRouter>
<AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
};

export default App;
