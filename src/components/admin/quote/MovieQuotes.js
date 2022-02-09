import i18n from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import MovieQuote from './MovieQuote';

const MovieQuotes = ({ quotes }) => {
  const { t, i18n } = useTranslation();

  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className='mt-6 rounded-lg p-10 border border-gray-800 '>
      <div className='w-full'>
        <input
          onClick={searchHandler}
          className='w-full px-5 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400'
          type='text'
          placeholder='search input'
          value={searchValue}
        />
      </div>
      <div className='mt-6 shadow overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-900'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                id
              </th>

              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                quote
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                created date
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                actions
              </th>
            </tr>
          </thead>
          <tbody className='text-white divide-y divide-gray-900  overflow-y-auto'>
            {quotes
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
              .map((quote) => (
                <MovieQuote key={quote.id} quote={quote} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieQuotes;
