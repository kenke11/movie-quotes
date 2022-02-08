import classes from './MovieCatalog.module.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Movie from './Movie';
import i18n from 'i18next';

const MovieCatalog = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchValue, setSearchValue] = useState('');

  const { t } = useTranslation();

  const apiPatch = 'http://127.0.0.1:8000/';

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      fetch(`${apiPatch}api/movies`)
        .then((res) => res.json())
        .then((movies) => {
          setMovies(movies);
          setIsLoading(true);
        })
        .catch((error) => {
          console.log('request failed', error);
          setError(error);
        });
    }, 1500);
  }, []);

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='w-10/12 md:w-8/12 m-auto mt-10'>
      <h2 className='mb-3 text-3xl font-serif font-bold'>
        {t('movie_catalog')}
      </h2>

      <div className='w-full mb-3'>
        <input
          className='w-full px-5 py-3 rounded-md bg-gray-800 text-white'
          type='text'
          placeholder={t('search_input')}
          onChange={searchHandler}
          value={searchValue}
        />
      </div>

      <div
        className={`${classes['calc-table']} rounded-md bg-gray-800 shadow overflow-x-auto border-b border-gray-600`}
      >
        <table className='min-w-full divide-y divide-gray-900'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                {t('id')}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                {t('name')}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                {t('created_date')}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                {t('actions')}
              </th>
            </tr>
          </thead>
          <tbody className='text-white divide-y divide-gray-900  overflow-y-auto'>
            {isLoading &&
              !error &&
              movies
                // eslint-disable-next-line array-callback-return
                .filter((value) => {
                  if (searchValue === '') {
                    return value;
                  } else if (
                    value.name[i18n.language]
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((movie) => <Movie key={movie.id} movie={movie} />)}
            {/*TODO*/}
            {/*{!isLoading && !error && (*/}
            {/*  <div className='py-5 px-10'>Loading...</div>*/}
            {/*)}*/}
            {/*{!isLoading && error && (*/}
            {/*  <div className='py-5 px-10'>Something went wrong!!!</div>*/}
            {/*)}*/}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieCatalog;
