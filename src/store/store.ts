import { orderPageReducer } from "./orderPageReducer/orderPageReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import { mainPageReducer } from "./mainPageReducer/mainPageReducer";

declare global {
  interface Window {
    store?: typeof store;
  }
}

const reducers = combineReducers({
  mainPage: mainPageReducer,
  orderPage: orderPageReducer,
});
export interface IStore {
  mainPage: ReturnType<typeof mainPageReducer>;
  orderPage: ReturnType<typeof orderPageReducer>;
}
//добавить типизацию в интерфейс сверху для нового редюсера
export const store = createStore(reducers, applyMiddleware(logger));

window.store = store;

type Maybe<V, R = unknown, X = unknown, Y = unknown> = V | R | null;

const a: Maybe<string, number> = 1;
const b: Maybe<number> = 1;

type Result = ReturnType<typeof test>;

const test = () => ({
  a: "sdsd",
  b: {
    c: [1, 2, 3],
  },
});
