import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import movieService from "../../services/movieService";

const initialState = {
    genres: [],
    errors: null,
    loading: null
};

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_,thunkAPI) => {
        try {
            const {data} = await movieService.getGenres();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const genreSlice = createSlice(
    {
        name: 'movieSlice',
        initialState,
        reducers: {
        },
        extraReducers: builder => builder
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genres = genres
            })
    }
);

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getGenres
};

export {
    genreReducer,
    genreActions
};