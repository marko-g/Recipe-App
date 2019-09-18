import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getRecipes } from "../reducers";

import App from "../App";
import Recipe from "./Recipe";

const middleware = [thunk]; // array

const store = createStore(
  getRecipes,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <App />} />
            <Route
              exact
              path="/recipe/:id"
              render={props => <Recipe {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Router;
