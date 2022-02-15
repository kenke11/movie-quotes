import React, { useEffect, useState } from 'react';
import MovieContainer from './MovieContainer';
import MovieError from './MovieError';
import MovieLoader from './MovieLoader';
import { useTranslation } from 'react-i18next';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const Movie = (props) => {
  const [movie, setMovie] = useState([]);
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setIsLoading(false);
    props.InitMovies();
    setError(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (props.movies.length > 0 && !error) {
        const randomMovie = props.movies
          .sort(() => Math.random() - Math.random())
          .find(() => true);
        setMovie(randomMovie);
        setQuote(randomMovie.quotes);
        setIsLoading(true);
      } else if (props.movies.length === 0) {
        setTimeout(() => {
          setError(true);
        }, 1000);
      }
    }, 1500);
  }, [props.movies]);

  const quoteTitle = quote['0']
    ? quote['0'].quote[i18n.language].length > 50
      ? quote['0'].quote[i18n.language].slice(0, 49) + '...'
      : quote['0'].quote[i18n.language]
    : t('dont_have_quotes.1');

  return (
    <div className={'pt-20 md:pt-48'}>
      {!isLoading && !error && <MovieLoader />}
      {!isLoading && error && <MovieError />}
      {isLoading && <MovieContainer movie={movie} title={quoteTitle} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    InitMovies: () => dispatch(actions.InitMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
