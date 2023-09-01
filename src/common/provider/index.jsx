import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "../routers/appRouter";

const ProviderApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default ProviderApp;
