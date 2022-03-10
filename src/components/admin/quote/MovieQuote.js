import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import QuoteEditModal from 'components/admin/quote/QuoteEditModal';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from 'store/actions';

const MovieQuote = (props) => {
  const { i18n } = useTranslation();

  const [editModal, setEditModal] = useState(false);

  const quoteModalBtnHandler = () => {
    setEditModal(!editModal);
  };

  const deleteQuoteHandler = () => {
    props.DeleteQuote(props.quote.id, props.movieId);
  };

  return (
    <>
      <tr className='rounded-md mb-2'>
        <td className='px-6 py-4 text-sm font-medium'>{props.quote.id}</td>
        <td className='px-6 py-4 text-sm font-medium'>
          {props.quote.quote[i18n.language].length > 50
            ? props.quote.quote[i18n.language].slice(0, 49) + '...'
            : props.quote.quote[i18n.language]}
        </td>
        <td className='px-6 py-4 text-sm font-medium'>
          {moment(props.quote.created_at).format('DD/MM/YYYY')}
        </td>
        <td className='px-6 py-4  text-sm font-medium space-y-1 md:space-y-0 md:space-x-3'>
          <button
            onClick={quoteModalBtnHandler}
            className='px-2 py-2 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-700 transition duration-200'
          >
            <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
              <path
                fillRule='evenodd'
                d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                clipRule='evenodd'
              />
            </svg>
          </button>

          <button
            onClick={deleteQuoteHandler}
            className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'
          >
            <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </td>
      </tr>
      {editModal && (
        <QuoteEditModal modalClose={quoteModalBtnHandler} quote={props.quote} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    DeleteQuote: (id, movieId) => dispatch(actions.DeleteQuote(id, movieId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieQuote);
