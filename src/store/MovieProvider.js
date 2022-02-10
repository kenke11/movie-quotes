import { useReducer } from 'react';
import MovieContext from './movie-context';

const defaultMovies = {
  movies: [],
};

const movieReducer = (state, action) => {
  if (action.type === 'FETCH') {
    console.log(action.movies);
    return {
      movies: action.movies,
    };
  }
  if (action.type === 'CREATE') {
    const updatedMovies = state.movies.concat(action.movie);
    return {
      movies: updatedMovies,
    };
  }
  if (action.type === 'DELETE') {
    const updatedMovies = state.movies.filter((movie) => movie.id != action.id);
    return {
      movies: updatedMovies,
    };
  }
  return defaultMovies;
};

const MovieProvider = (props) => {
  const fetchMovieHandler = (movies) => {
    dispatchMovieAction({ type: 'FETCH', movies: movies });
  };

  const [movieState, dispatchMovieAction] = useReducer(
    movieReducer,
    defaultMovies
  );

  const createMovieHandler = (movie) => {
    dispatchMovieAction({ type: 'CREATE', movie: movie });
  };

  const updateMovieHandler = (id) => {
    dispatchMovieAction({ type: 'UPDATE', id: id });
  };

  const deleteMovieHandler = (id) => {
    dispatchMovieAction({ type: 'DELETE', id: id });
  };

  const movieContext = {
    movies: movieState.movies,
    fetchMovie: fetchMovieHandler,
    createdMovie: createMovieHandler,
    updateMovie: updateMovieHandler,
    deleteMovie: deleteMovieHandler,
  };

  return (
    <MovieContext.Provider value={movieContext}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
