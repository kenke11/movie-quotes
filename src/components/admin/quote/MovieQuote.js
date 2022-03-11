import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import QuoteEditModal from 'components/admin/quote/QuoteEditModal';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from 'store/actions';
import EditIcon from 'components/UI/icons/EditIcon';
import DeleteIcon from 'components/UI/icons/DeleteIcon';

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
            <EditIcon />
          </button>

          <button
            onClick={deleteQuoteHandler}
            className='px-2 py-2 rounded-md bg-red-900 text-red-300 hover:bg-red-700 transition duration-200'
          >
            <DeleteIcon />
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
