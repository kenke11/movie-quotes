import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';
import Movie from 'components/admin/movie/Movie';

const MovieCatalog = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    props.InitMovies();
    setIsLoading(true);
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
          className='w-full px-5 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400'
          type='text'
          placeholder={t('search_input')}
          onChange={searchHandler}
          value={searchValue}
        />
      </div>

      <div
        className={`calc-table rounded-md bg-gray-800 shadow overflow-x-auto border-b border-gray-600`}
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
              props.movies
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
          </tbody>
        </table>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);
