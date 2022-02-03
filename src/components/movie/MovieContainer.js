import { Link } from 'react-router-dom';
import React from 'react';

const MovieContainer = ({ movie, title }) => {
  return (
    <>
      <div>
        <img
          src={`http://127.0.0.1:8000/storage/${movie.img}`}
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
  );
};

export default MovieContainer;
