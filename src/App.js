import React, { Fragment, useEffect, useState } from 'react';
import Nav from './components/changeLanguageNav/Nav';
import Movie from './components/movie/Movie';

function App() {
  return (
    <Fragment>
      <Nav />
      <Movie />
    </Fragment>
  );
}

export default App;
