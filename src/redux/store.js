import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducers from "./rootReducer";

export const getStore = (init = {}) => {
  return createStore(reducers, init, applyMiddleware(reduxPromise));
};

const store = getStore();

export default store;
