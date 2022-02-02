import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiPatch = 'http://127.0.0.1:8000/';

  useEffect(() => {
    setIsLoading(false);
    fetch(`${apiPatch}api/movies`)
      .then((res) => res.json())
      .then((movies) => {
        const result = movies
          .sort(() => Math.random() - Math.random())
          .find(() => true);

        setMovie(result);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiPatch}api/movies/${movie.id}/quote`)
      .then((res) => res.text())
      .then((quoteResult) => {
        console.log(quoteResult);
        if (quoteResult) setQuote(quoteResult);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log('request failed', error);
      });
  }, [movie]);

  const title = quote
    ? quote.quote.en.length > 50
      ? quote.quote.en.slice(0, 49) + '...'
      : quote.quote.en
    : 'Dont have quote';

  return (
    <div className={'pt-32 md:pt-48'}>
      {isLoading && (
        <>
          <div>
            <img
              src={`${apiPatch}storage/${movie.img}`}
              className='flex justify-center text-center m-auto rounded-xl'
              width='700px'
            />
          </div>

          <div className='mt-16'>
            <h1 className='flex justify-center text-center text-white text-xl md:text-5xl'>
              {title}
            </h1>
          </div>

          <div className='mt-20'>
            <Link
              to={`movie/${movie.id}/quotes`}
              className='flex justify-center text-white text-xl md:text-5xl underline'
            >
              {movie.name.en}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
