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
} from './actionType';

export const InitMovies = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/movies`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setMovies(res.data));
      })
      .catch((error) => {
        console.log('error', error);
        dispatch(fetchMoviesFail());
      });
  };
};

export const DeleteMovie = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);

        axios
          .delete(`${process.env.REACT_APP_API_URL}/api/movie/${id}/delete`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            dispatch(removeMovie(id));
          });
      });
  };
};

export const InitMovie = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/movie/${id}/quotes`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        dispatch(setMovie(id, res.data));
      })
      .catch((error) => {
        console.log('error', error);
        dispatch(fetchMovieFail(error));
      });
  };
};

export const CreateQuote = (quote) => {
  const data = new FormData();

  data.append('quote_en', quote.quoteEn);
  data.append('quote_ge', quote.quoteGe);
  data.append('movie_id', quote.movieId);
  data.append('quote_img', quote.imgFile);

  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);

        axios
          .post(`${process.env.REACT_APP_API_URL}/api/quote/create`, data, {
            withCredentials: true,
          })
          .then((response) => {
            dispatch(storeQuote(response.data));
          })
          .catch((error) => {
            dispatch(storeQuoteFail(error));
          });
      });
  };
};

export const DeleteQuote = (id, movieId) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);

        axios
          .delete(`${process.env.REACT_APP_API_URL}/api/quote/${id}/delete`, {
            withCredentials: true,
          })
          .then((res) => {
            dispatch(removeQuote(id, movieId));
          });
      });
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
