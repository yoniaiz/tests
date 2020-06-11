import React from "react";
import { Provider } from "react-redux";
import store, { getStore } from "./store";

export default ({ children, initialState }) => {
  return (
    <Provider store={initialState ? getStore(initialState) : store}>
      {children}
    </Provider>
  );
};
