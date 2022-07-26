import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./index.css";
import { AppAlertProvider } from "./contexts/alertContext";
import firebaseApp from "./firebaseConfig";
import { AppCartInfoProvider } from "./contexts/cartContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppAlertProvider>
        <AppCartInfoProvider>
          <App />
        </AppCartInfoProvider>
      </AppAlertProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
