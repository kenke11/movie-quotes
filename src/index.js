import React, { Suspense } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './i18next';
import { AuthContextProvider } from './store/auth-context';

import MovieReducer from './store/reducers/movieReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({ movies: MovieReducer });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <AuthContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </AuthContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
