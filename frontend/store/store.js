import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

let middleware;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    middleware = applyMiddleware(thunk, logger);
} else {
    middleware = applyMiddleware(thunk);
};

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, middleware)
);

export default configureStore;
