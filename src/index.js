import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./Middleware";
import reducer from "./Reducers";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
