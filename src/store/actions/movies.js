import axios from 'axios';
import { DELETE_MOVIE, FETCH_MOVIES_FAIL, SET_MOVIE } from './actionType';

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
