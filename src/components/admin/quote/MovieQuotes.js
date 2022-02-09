import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MovieQuote from './MovieQuote';
import Button from '../../UI/Button';
import QuoteCreateModal from './QuoteCreateModal';

const MovieQuotes = ({ quotes, movieId }) => {
  const { t, i18n } = useTranslation();

  const [quoteCreateModalIsOpen, setQuoteCreateModalIsOpen] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const modalClose = () => {
    setQuoteCreateModalIsOpen(!quoteCreateModalIsOpen);
  };

  return (
    <>
      <div className='mt-6 rounded-lg p-10 border border-gray-800 '>
        <div className='w-full flex'>
          <input
            onClick={searchHandler}
            className='w-full px-5 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 rounded-r-none'
            type='text'
            placeholder='search input'
          />
          <Button
            type='button'
            disabled={true}
            className='bg-green-800 border-0 hover:bg-green-900 rounded-l-none flex'
            onClick={modalClose}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mr-3'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                clipRule='evenodd'
              />
            </svg>
            <span>Create</span>
          </Button>
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

      {quoteCreateModalIsOpen && (
        <QuoteCreateModal modalClose={modalClose} movieId={movieId} />
      )}
    </>
  );
};

export default MovieQuotes;
