import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Button from 'components/UI/Button';
import SuccessIcon from 'components/UI/icons/SuccessIcon';
import ErrorIcon from 'components/UI/icons/ErrorIcon';

const isEmpty = (value) => value.trim() === '';
const isNotTreeChars = (value) => value.trim().length > 2;

const QuoteEditForm = ({ modalClose, quote }) => {
  const { t } = useTranslation();

  const movieImg = `${process.env.REACT_APP_API_URL}/storage/${quote.quote_img}`;

  const [imgFile, setImgFile] = useState();
  const [preview, setPreview] = useState(movieImg);

  const [quoteEn, setQuoteEn] = useState(quote.quote.en);
  const [quoteGe, setQuoteGe] = useState(quote.quote.ge);

  const [formIsValid, setFormIsValid] = useState(false);

  const [messageSuccess, setMessageSuccess] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    if (!imgFile) {
      setPreview(movieImg);
      return;
    }

    const objectUrl = URL.createObjectURL(imgFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [imgFile]);

  const selectImgFileHandler = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImgFile(undefined);
      return;
    }

    setImgFile(e.target.files[0]);
  };

  const quoteEnHandler = (e) => {
    setQuoteEn(e.target.value);
  };

  const quoteGeHandler = (e) => {
    setQuoteGe(e.target.value);
  };

  useEffect(() => {
    const enteredNameEnIsValid = !isEmpty(quoteEn) && isNotTreeChars(quoteEn);
    const enteredNameGeIsValid = !isEmpty(quoteGe) && isNotTreeChars(quoteGe);
    setFormIsValid(enteredNameGeIsValid && enteredNameEnIsValid && !!preview);
  }, [preview, quoteEn, quoteGe]);

  const quoteUpdateHandler = async (e) => {
    e.preventDefault();

    if (formIsValid) {
      const data = new FormData();

      data.append('quote_en', quoteEn);
      data.append('quote_ge', quoteGe);
      data.append('img', imgFile);

      try {
        await axios.get(
          `${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`,
          {
            withCredentials: true,
          }
        );

        let res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/quote/${quote.id}/update`,
          data,
          {
            withCredentials: true,
          }
        );

        if (res.status === 200) {
          setMessageSuccess(res.data.message);
          setImgFile(undefined);
        } else {
          setMessageError(res.data.message);
        }

        setTimeout(() => {
          setMessageError('');
          setMessageSuccess('');
        }, 5000);
      } catch (error) {
        setMessageError('Something went wrong!');
        setTimeout(() => {
          setMessageError('');
        }, 5000);
      }
    }
  };

  return (
    <form
      className='rounded-lg p-10 border border-gray-800'
      encType='multipart/form-data'
      onSubmit={quoteUpdateHandler}
    >
      <div className='md:flex md:space-x-10'>
        <div className='w-full md:w-3/12 relative h-72 z-20'>
          <label
            htmlFor='quote_img'
            className='flex absolute flex-row justify-center items-center top-0 right-0 bottom-0 left-0 cursor-pointer bg-gray-800 rounded-lg text-sm text-gray-400 '
          >
            {t('upload_image')}
          </label>
          <input
            type='file'
            id='quote_img'
            hidden
            onChange={selectImgFileHandler}
          />
          {preview && (
            <div className='-z-10 h-full flex items-center'>
              <img src={preview} className='absolute' alt='movie img' />
            </div>
          )}
        </div>
        <div className='w-full mt-6 md:mt-0 md:w-9/12'>
          <div className='w-full'>
            <label htmlFor='quote_en' className='w-full'>
              <textarea
                id='quote_en'
                className='focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 w-full bg-gray-800 rounded-lg px-5 py-3 text-white caret-orange-400 h-32'
                placeholder={t('quote_in_english')}
                onChange={quoteEnHandler}
                value={quoteEn}
              />
            </label>
          </div>
          <div className='w-full mt-6'>
            <label htmlFor='quote_ge' className='w-full'>
              <textarea
                id='quote_ge'
                className='focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 w-full bg-gray-800 rounded-lg px-5 py-3 text-white caret-orange-400 h-32'
                placeholder={t('quote_in_georgian')}
                onChange={quoteGeHandler}
                value={quoteGe}
              />
            </label>
          </div>
        </div>
      </div>
      <div className='mt-6 flex justify-between'>
        <div>
          {messageSuccess && (
            <div className='absolute mr-10 mb-10 pl-2 pr-2 py-3 flex items-center text-green-500'>
              <SuccessIcon />
              <span>{messageSuccess}</span>
            </div>
          )}

          {messageError && (
            <div className='absolute mb-10 pl-2 pr-2 py-3 rounded-md flex items-center text-red'>
              <ErrorIcon />
              <span className='text-red-600'>{messageError}</span>
            </div>
          )}
        </div>
        <div className='space-x-7'>
          <Button type='submit' disabled={formIsValid}>
            {t('publish')}
          </Button>
          <Button type='button' onClick={modalClose} disabled={true}>
            {t('close')}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default QuoteEditForm;
