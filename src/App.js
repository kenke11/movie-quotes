import React, { Fragment, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/changeLanguageNav/Nav';
import Movie from './components/movie/Movie';
import Quotes from './components/quotes/Quotes';
import Login from './components/auth/Login';
import NotFound from './components/error/NotFound';
import AdminPanel from './components/admin/AdminPanel';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/movie/:id/quotes' element={<Quotes />} />

        <Route
          path='/login'
          element={
            !authCtx.isLoggedIn ? <Login /> : <Navigate to='/admin-panel' />
          }
        />

        <Route
          path='/admin-panel'
          element={
            authCtx.isLoggedIn ? <AdminPanel /> : <Navigate to='/login' />
          }
        />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
