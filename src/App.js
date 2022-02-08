import React, { Fragment, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Movie from './components/movie/Movie';
import Quotes from './components/quotes/Quotes';
import Login from './components/auth/Login';
import NotFound from './components/error/NotFound';
import AdminPanel from './components/admin/AdminPanel';
import AuthContext from './store/auth-context';
import MovieCatalog from './components/admin/movie/MovieCatalog';
import Layout from './components/layout/Layout';
import MovieCreate from './components/admin/movie/MovieCreate';
import MovieUpdate from './components/admin/movie/MovieUpdate';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Movie />} />
          <Route path='/movie/:id/quotes' element={<Quotes />} />

          <Route
            path='login'
            element={
              !authCtx.isLoggedIn ? <Login /> : <Navigate to='/admin-panel' />
            }
          />

          <Route path='*' element={<NotFound />} />
        </Route>

        <Route
          path='/admin-panel'
          element={
            authCtx.isLoggedIn ? <AdminPanel /> : <Navigate to='/login' />
          }
        >
          <Route path='movies' element={<MovieCatalog />} />
          <Route path='movie/create' element={<MovieCreate />} />
          <Route path='movies/:id/update' element={<MovieUpdate />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
