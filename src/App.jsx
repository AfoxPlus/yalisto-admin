import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Provider>
    </>
  );
};
