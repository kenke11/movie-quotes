import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MovieQuote from 'components/admin/quote/MovieQuote';
import Button from 'components/UI/Button';
import QuoteCreateModal from 'components/admin/quote/QuoteCreateModal';
import PlusIcon from 'components/UI/icons/PlusIcon';

const MovieQuotes = ({ quotes, movieId }) => {
  const { t, i18n } = useTranslation();

  const [quoteCreateModalIsOpen, setQuoteCreateModalIsOpen] = useState(false);

  const [searchQuoteValue, setSearchQuoteValue] = useState('');

  const searchQuoteHandler = (e) => {
    setSearchQuoteValue(e.target.value);
  };

  const modalClose = () => {
    setQuoteCreateModalIsOpen(!quoteCreateModalIsOpen);
  };

  return (
    <>
      <div className='mt-6 rounded-lg p-10 border border-gray-800 '>
        <div className='w-full flex'>
          <input
            onChange={searchQuoteHandler}
            className='w-full px-5 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 rounded-r-none'
            type='text'
            placeholder={t('search')}
            value={searchQuoteValue}
          />
          <Button
            type='button'
            disabled={true}
            className='bg-green-800 border-0 hover:bg-green-900 rounded-l-none flex'
            onClick={modalClose}
          >
            <PlusIcon />
            <span>Create</span>
          </Button>
        </div>
        <div className='mt-6 shadow overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-900'>
            <thead>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                  {t('id')}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                  {t('quote')}
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
              {quotes
                .filter((value) => {
                  if (searchQuoteValue === '') {
                    return value;
                  } else if (
                    value.quote[i18n.language]
                      .toLowerCase()
                      .includes(searchQuoteValue.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((quote) => (
                  <MovieQuote key={quote.id} quote={quote} movieId={movieId} />
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
