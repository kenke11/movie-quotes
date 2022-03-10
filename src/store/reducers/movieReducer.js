import {
  CREATE_QUOTE,
  CREATE_QUOTE_FAIL,
  DELETE_MOVIE,
  DELETE_QUOTE,
  FETCH_MOVIES_FAIL,
  SET_MOVIE,
  SET_MOVIES,
} from 'store/actions/actionType';

const initialMoviesState = {
  list: [],
  error: false,
};

const initialMovieState = {
  movie: [],
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

const setMovie = (state, action) => {
  return { ...state, movie: action.movie, error: false };
};

const createQuote = (state, action) => {
  const updatedState = { ...state };

  const quote = action.quote.quote;

  // eslint-disable-next-line array-callback-return
  const updatedMovie = updatedState.movie.map((movie) => {
    movie.quotes = movie.quotes.concat(quote);
    return movie;
  });

  return { ...state, movie: updatedMovie, error: false };
};

const createFailQuote = () => {};

const removeQuote = (state, action) => {
  const updatedState = { ...state };

  // eslint-disable-next-line array-callback-return
  const updatedMovie = updatedState.movie.map((movie) => {
    if (action.movieId === movie.id) {
      movie.quotes = movie.quotes.filter((quote) => quote.id !== action.id);
      return movie;
    }
  });

  return { ...state, movie: updatedMovie, error: false };
};

const MoviesReducer = (state = initialMoviesState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return setMovies(state, action);
    case FETCH_MOVIES_FAIL:
      return fetchMoviesFail(state, action);
    case DELETE_MOVIE:
      return removeMovie(state, action);
    default:
      return state;
  }
};

export const MovieReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return setMovie(state, action);
    case CREATE_QUOTE:
      return createQuote(state, action);
    case CREATE_QUOTE_FAIL:
      return createFailQuote(state, action);
    case DELETE_QUOTE:
      return removeQuote(state, action);
    default:
      return state;
  }
};

export default MoviesReducer;
