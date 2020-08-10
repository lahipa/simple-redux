import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import peopleReducer from "./reducers/people";
import barangReducer from "./reducers/barang";

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

//const store = createStore(rootReducer);
//composeEnhancers(applyMiddleware(logger))
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
