import { combineReducers, createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer/root-reducer";
import logger from "redux-logger";

declare global {
  interface Window {
    store?: typeof store;
  }
}

const reducers = combineReducers({
  root: rootReducer,
});

export const store = createStore(reducers, applyMiddleware(logger));

window.store = store;
