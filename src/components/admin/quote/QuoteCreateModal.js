import classes from 'components/admin/quote/QuoteEditModal.module.css';
import QuoteCreateForm from 'components/admin/quote/QuoteCreateForm';

const QuoteCreateModal = ({ modalClose, movieId }) => {
  return (
    <div>
      <div onClick={modalClose} className={classes.backdrop} />
      <div className={classes.modal}>
        <QuoteCreateForm modalClose={modalClose} movieId={movieId} />
      </div>
    </div>
  );
};

export default QuoteCreateModal;
