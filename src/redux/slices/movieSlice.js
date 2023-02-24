import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import movieService from "../../services/movieService";

const initialState = {
    movies: [],
    errors: null,
    loading: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_,thunkAPI) => {
        try {
            const {data} = await movieService.getMovies();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const movieSlice = createSlice(
    {
        name: 'movieSlice',
        initialState,
        reducers: {
        },
        extraReducers: builder => builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results
            })
    }
);



const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getMovies
};

export {
    movieReducer,
    movieActions
};