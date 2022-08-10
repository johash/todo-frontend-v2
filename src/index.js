import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        theme={{ colorScheme: "dark", fontFamily: "Poppins, sans-serif" }}
      >
        <NotificationsProvider position="top-center">
          <App />
        </NotificationsProvider>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
