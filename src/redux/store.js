import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./index";

const rootReducer = combineReducers(
    {
        movies: movieReducer
    }
);

const setupStore = () => configureStore(
    {
        reducer: rootReducer
    }
);

export {
    setupStore
};