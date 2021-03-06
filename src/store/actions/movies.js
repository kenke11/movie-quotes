import axios from 'axios';
import {
  DELETE_MOVIE,
  DELETE_QUOTE,
  FETCH_MOVIES_FAIL,
  SET_MOVIES,
  SET_MOVIE,
  FETCH_MOVIE_FAIL,
  CREATE_QUOTE,
  CREATE_QUOTE_FAIL,
} from 'store/actions/actionType';

export const InitMovies = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/movies`, {
        withCredentials: true,
      });

      dispatch(setMovies(res.data));
    } catch (error) {
      dispatch(fetchMoviesFail());
    }
  };
};

export const DeleteMovie = (id) => {
  return async (dispatch) => {
    await axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });

    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/movie/${id}/delete`,
      {
        withCredentials: true,
      }
    );

    dispatch(removeMovie(id));
  };
};

export const InitMovie = (id) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/movie/${id}/quotes`,
        {
          withCredentials: true,
        }
      );

      dispatch(setMovie(id, res.data));
    } catch (error) {
      dispatch(fetchMovieFail(error));
    }
  };
};

export const CreateQuote = (quote) => {
  const data = new FormData();

  data.append('quote_en', quote.quoteEn);
  data.append('quote_ge', quote.quoteGe);
  data.append('movie_id', quote.movieId);
  data.append('quote_img', quote.imgFile);

  return async (dispatch) => {
    try {
      await axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });

      let res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/quote/create`,
        data,
        {
          withCredentials: true,
        }
      );

      dispatch(storeQuote(res.data));
    } catch (error) {
      dispatch(storeQuoteFail(error));
    }
  };
};

export const DeleteQuote = (id, movieId) => {
  return async (dispatch) => {
    await axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });

    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/quote/${id}/delete`,
      {
        withCredentials: true,
      }
    );

    dispatch(removeQuote(id, movieId));
  };
};

const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    movies: movies,
  };
};

const fetchMoviesFail = () => {
  return {
    type: FETCH_MOVIES_FAIL,
  };
};

const removeMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    id: id,
  };
};

const setMovie = (id, movie) => {
  return {
    type: SET_MOVIE,
    movie: movie,
    id: id,
  };
};

const fetchMovieFail = () => {
  return {
    type: FETCH_MOVIE_FAIL,
  };
};

const removeQuote = (id, movieId) => {
  return {
    type: DELETE_QUOTE,
    id: id,
    movieId: movieId,
  };
};

const storeQuote = (quote) => {
  return {
    type: CREATE_QUOTE,
    quote: quote,
  };
};

const storeQuoteFail = (error) => {
  return {
    type: CREATE_QUOTE_FAIL,
    error: error,
  };
};
