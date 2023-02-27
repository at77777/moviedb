import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer} from "./index";


const rootReducer = combineReducers(
    {
        genres: genreReducer,
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