import React, { Fragment, useContext } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
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
      {authCtx.isLoggedIn && (
        <div className='py-0.5 px-5 bg-gray-800 text-white w-full text-sm fixed admin-nav-header'>
          <nav>
            <ul className='flex justify-between text-gray-300'>
              <div className='flex space-x-5'>
                <li className='hover:text-gray-50'>
                  <Link to='/admin-panel'>Admin panel</Link>
                </li>
                <li className='hover:text-gray-50'>
                  <Link to='/'>Random movie page</Link>
                </li>
              </div>
              <li>
                <button
                  onClick={() => authCtx.logout()}
                  className='hover:text-red-300'
                >
                  logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

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
