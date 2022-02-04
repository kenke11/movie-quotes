import React, { useEffect, useState } from 'react';
import MovieContainer from './MovieContainer';
import MovieError from './MovieError';
import MovieLoader from './MovieLoader';
import { useTranslation } from 'react-i18next';

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();

  console.log('t', t('key'));

  const apiPatch = 'http://127.0.0.1:8000/';

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      fetch(`${apiPatch}api/movies`)
        .then((res) => res.json())
        .then((movies) => {
          const result = movies
            .sort(() => Math.random() - Math.random())
            .find(() => true);
          setMovie(result);
          setQuote(result.quotes);
          setIsLoading(true);
        })
        .catch((error) => {
          console.log('request failed', error);
          setError(error);
        });
    }, 1500);
  }, []);

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

export default Movie;
