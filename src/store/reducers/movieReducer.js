import {
  DELETE_MOVIE,
  FETCH_MOVIES_FAIL,
  SET_MOVIE,
} from '../actions/actionType';

const initialState = {
  list: [],
  error: false,
};

const setMovies = (state, action) => {
  return { ...state, list: action.movies, error: false };
};

const fetchMoviesFail = (state) => {
  return { ...state, error: true };
};

const removeMovie = (state, action) => {
  const updatedMovie = state.list.filter((el) => el.id !== action.id);
  return { ...state, list: updatedMovie, error: false };
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return setMovies(state, action);
    case FETCH_MOVIES_FAIL:
      return fetchMoviesFail(state, action);
    case DELETE_MOVIE:
      return removeMovie(state, action);
    default:
      return state;
  }
};

export default MovieReducer;
