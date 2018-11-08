
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import App from "./containers/app";
import { reducer } from "./reducers";
import * as cache from "./cache";

cache.getAllTabs().then((tabs) => {
    let state = {
        tabs: tabs,
        top: tabs[0],
    };
    const store = createStore(reducer, state, applyMiddleware(thunk, logger));

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("content")
    );
});
