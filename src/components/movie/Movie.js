import React, { useEffect, useState } from 'react';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    fetch('http://127.0.0.1:8001/api/movies')
      .then((res) => res.json())
      .then((movies) => {
        const result = movies
          .sort(() => Math.random() - Math.random())
          .find(() => true);

        setMovie(result);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8001/api/movies/${movie.id}/quote`)
      .then((res) => res.json())
      .then((quoteResult) => {
        console.log('quote =>', quoteResult);

        setQuote(quoteResult);
        setIsLoading(true);
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
              src={`http://127.0.0.1:8001/storage/${movie.img}`}
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
            <a
              href=''
              className='flex justify-center text-white text-xl md:text-5xl underline'
            >
              {movie.name.en}
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
