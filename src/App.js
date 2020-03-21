import React from "react";

import "./index.css";
import "./bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./containers/AppRouter";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
