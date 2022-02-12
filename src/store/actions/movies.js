import axios from 'axios';
import {
  DELETE_MOVIE,
  DELETE_QUOTE,
  FETCH_MOVIES_FAIL,
  SET_MOVIES,
  SET_MOVIE,
  FETCH_MOVIE_FAIL,
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

export const InitMovie = (id) => {
  return (dispatch) => {
    axios
      .get(`http://127.0.0.1:8000/api/movie/${id}/quotes`)
      .then((res) => {
        dispatch(setMovie(id, res.data));
      })
      .catch((error) => {
        console.log('error', error);
        dispatch(fetchMovieFail());
      });
  };
};

export const DeleteQuote = (id, movieId) => {
  return (dispatch) => {
    axios.delete(`http://127.0.0.1:8000/api/quote/${id}/delete`).then((res) => {
      dispatch(removeQuote(id, movieId));
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
