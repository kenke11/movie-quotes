import classes from './QuoteEditModal.module.css';
import QuoteEditForm from './QuoteEditForm';

const QuoteEditModal = ({ modalClose, quote }) => {
  return (
    <div>
      <div onClick={modalClose} className={classes.backdrop} />
      <div className={classes.modal}>
        <QuoteEditForm modalClose={modalClose} quote={quote} />
      </div>
    </div>
  );
};

export default QuoteEditModal;
