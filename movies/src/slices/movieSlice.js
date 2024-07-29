import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let page = 4;

const apiKey = "4b7e05b0"; //"5a036fc9";
const baseUrl = "http://www.omdbapi.com/";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchTerm) => {
    try {
      const response = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=${searchTerm}`
      );
      return response.data.Search || [];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    try {
      const response = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=movie&page=${page}`
      );

      return response.data.Search || [];
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (movieId) => {
    try {
      const response = await axios.get(
        `${baseUrl}?apikey=${apiKey}&i=${movieId}&plot=full`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    topRatedMovies: [],
    movieDetails: {},
    status: "idle",
    error: null,
  },
  // reducers: {}, სინქრონული ექშენები რომ გვქონოდა დავწერდით აქ
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topRatedMovies = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        console.log("stateeeeeee" + JSON.stringify(state));
        console.log("actionnnnnn" + JSON.stringify(action));
        state.status = "succeeded";
        const movieDetails = action.payload;
        state.movieDetails[movieDetails.imdbID] = movieDetails;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
