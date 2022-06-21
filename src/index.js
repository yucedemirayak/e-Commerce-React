import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/Styles/custom.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.min.js";
import persistStore from "redux-persist/es/persistStore";
import store from "./Services/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./Services/Utils/Interceptors";
import { setupAxios } from "./Services/Utils/Interceptors";
import { ToastContainer } from "react-bootstrap";

let persistor = persistStore(store);
setupAxios(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <ToastContainer />
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
