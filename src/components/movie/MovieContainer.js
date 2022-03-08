import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MovieContainer = ({ movie, title }) => {
  const { i18n } = useTranslation('home');

  return (
    <>
      <div>
        <img
          src={`${process.env.REACT_APP_API_URL}/storage/${movie.img}`}
          className='flex justify-center text-center m-auto rounded-xl'
          width='700px'
          alt='movie'
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
          {movie.name[i18n.language]}
        </Link>
      </div>
    </>
  );
};

export default MovieContainer;
