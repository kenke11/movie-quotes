import React from 'react';

const MovieContext = React.createContext({
  movies: [],
  fetchMovie: (movies) => {},
  createdMovie: (movie) => {},
  updateMovie: (id) => {},
  deleteMovie: (id) => {},
});

export default MovieContext;
