import axios from 'axios';
import {
  DELETE_MOVIE,
  DELETE_QUOTE,
  FETCH_MOVIES_FAIL,
  SET_MOVIE,
} from './actionType';

export const InitMovies = () => {
  return (dispatch) => {
    axios
      .get('http://127.0.0.1:8000/api/movies')
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
    axios.delete(`http://127.0.0.1:8000/api/movie/${id}/delete`).then((res) => {
      dispatch(removeMovie(id));
    });
  };
};

export const DeleteQuote = (id) => {
  return (dispatch) => {
    axios.delete(`http://127.0.0.1:8000/api/quote/${id}/delete`).then((res) => {
      dispatch(removeQuote(id));
    });
  };
};

const setMovies = (movies) => {
  return {
    type: SET_MOVIE,
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

const removeQuote = (id) => {
  return {
    type: DELETE_QUOTE,
    id: id,
  };
};
