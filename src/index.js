import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
//import store from './store'

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import peopleReducer from "./store/reducers/people";
import barangReducer from "./store/reducers/barang";

const rootReducer = combineReducers({
  peopleReducer,
  barangReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.group(action.type);
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      console.groupEnd();
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
