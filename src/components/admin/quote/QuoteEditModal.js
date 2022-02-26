import classes from './QuoteEditModal.module.css';
import QuoteEditForm from './QuoteEditForm';

const QuoteEditModal = ({ modalClose, quote }) => {
  return (
    <div className='overscroll-y-auto'>
      <div onClick={modalClose} className={classes.backdrop} />
      <div className={classes.modal}>
        <QuoteEditForm modalClose={modalClose} quote={quote} />
      </div>
    </div>
  );
};

export default QuoteEditModal;
