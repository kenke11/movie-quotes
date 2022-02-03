import React, { Fragment } from 'react';
import Nav from './components/changeLanguageNav/Nav';
import Movie from './components/movie/Movie';
import { Routes, Route } from 'react-router-dom';
import Quotes from './components/quotes/Quotes';
import NotFound from './components/error/NotFound';

function App() {
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/movie/:id/quotes' element={<Quotes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
