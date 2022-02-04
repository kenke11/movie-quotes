import classes from './MovieError.module.css';
import { useEffect, useState } from 'react';

const MovieError = () => {
  const [screenWidth, setScreenWidth] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    screen.width > 700 ? setScreenWidth(true) : setScreenWidth(false);
  }, []);

  return (
    <>
      {screenWidth && <div className={classes['bg-img']} />}
      {!screenWidth && (
        <div>
          <div>
            <img
              src='http://127.0.0.1:8000/img/images.jpeg'
              className='flex justify-center text-center m-auto rounded-xl'
              alt='error'
            />
          </div>

          <div className='mt-16'>
            <h1 className='flex justify-center text-center text-white text-2xl md:text-5xl'>
              No movies were found
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieError;
