import React from "react";
import ReactDOM from "react-dom";

//VideoApp
import App4 from "./VideoApp/App4";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./VideoApp/reducers";
import reduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App4 />
  </Provider>,
  rootElement
);
