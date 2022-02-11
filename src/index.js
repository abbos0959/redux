import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./component/Reducer"
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
