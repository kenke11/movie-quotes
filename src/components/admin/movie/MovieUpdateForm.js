import Button from '../../UI/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import axios from 'axios';

const isEmpty = (value) => value.trim() === '';
const isNotTreeChars = (value) => value.trim().length > 2;

const MovieUpdateForm = ({ movie }) => {
  const { t } = useTranslation();

  const movieImg = `https://movie-quotes-api.tazo.redberryinternship.ge/storage/${movie.img}`;

  const [imgFile, setImgFile] = useState();
  const [preview, setPreview] = useState();

  const [nameEn, setNameEn] = useState(movie.name.en);
  const [nameGe, setNameGe] = useState(movie.name.ge);

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

  const nameEnHandler = (e) => {
    setNameEn(e.target.value);
  };

  const nameGeHandler = (e) => {
    setNameGe(e.target.value);
  };

  useEffect(() => {
    const enteredNameEnIsValid = !isEmpty(nameEn) && isNotTreeChars(nameEn);
    const enteredNameGeIsValid = !isEmpty(nameGe) && isNotTreeChars(nameGe);
    setFormIsValid(enteredNameGeIsValid && enteredNameEnIsValid && !!preview);
  }, [preview, nameEn, nameGe]);

  const movieUpdateHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      const data = new FormData();

      data.append('name_en', nameEn);
      data.append('name_ge', nameGe);
      data.append('img', imgFile);

      axios
        .get(
          'https://movie-quotes-api.tazo.redberryinternship.ge/sanctum/csrf-cookie',
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);

          axios
            .post(
              `https://movie-quotes-api.tazo.redberryinternship.ge/api/movie/${movie.id}/update`,
              data
            )
            .then((response) => {
              if (response.status === 200) {
                setMessageSuccess(response.data.message);
                setImgFile(undefined);
              } else {
                setMessageError(response.data.message);
              }

              setTimeout(() => {
                setMessageError('');
                setMessageSuccess('');
              }, 5000);
            })
            .catch((error) => {
              setMessageError('Something went wrong!');
              setTimeout(() => {
                setMessageError('');
              }, 5000);
              console.log('request errors', error);
            });
        });
    }
  };

  const messageBtnHandler = () => {
    setMessageError('');
    setMessageSuccess('');
  };

  return (
    <>
      <form
        className='rounded-lg p-10 border border-gray-800'
        encType='multipart/form-data'
        onSubmit={movieUpdateHandler}
      >
        <div className='md:flex md:space-x-10'>
          <div className='w-full md:w-3/12 relative h-72 z-20'>
            <label
              htmlFor='movie_img'
              className='flex absolute flex-row justify-center items-center top-0 right-0 bottom-0 left-0 cursor-pointer bg-gray-800 rounded-lg text-sm text-gray-400 '
            >
              {t('upload_image')}
            </label>
            <input
              type='file'
              id='movie_img'
              hidden
              onChange={selectImgFileHandler}
            />
            {preview && (
              <div className='-z-10 h-full flex items-center w-full'>
                <img
                  src={preview}
                  className='absolute px-5 max-h-64 w-full'
                  alt='movie img'
                />
              </div>
            )}
          </div>
          <div className='w-full mt-6 md:mt-0 md:w-9/12'>
            <div className='w-full'>
              <label htmlFor='name_en' className='w-full'>
                <input
                  id='name_en'
                  type='text'
                  className='focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 w-full bg-gray-800 rounded-lg px-5 py-3 text-white caret-orange-400'
                  placeholder={t('movie_name_in_english')}
                  value={nameEn}
                  onChange={nameEnHandler}
                />
              </label>
            </div>
            <div className='w-full mt-6'>
              <label htmlFor='name_ge' className='w-full'>
                <input
                  id='name_ge'
                  type='text'
                  className='focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 w-full bg-gray-800 rounded-lg px-5 py-3 text-white caret-orange-400'
                  placeholder={t('movie_name_in_georgian')}
                  value={nameGe}
                  onChange={nameGeHandler}
                />
              </label>
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-end'>
          <Button type='submit' disabled={formIsValid}>
            {t('updated')}
          </Button>
        </div>
      </form>

      {messageSuccess && (
        <div className='bg-gray-600 absolute bottom-0 right-0 mr-10 mb-10 pl-2 pr-2 py-3 rounded-md flex items-center'>
          <svg
            className='h-5 w-5 text-green-500 mr-3'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'
            />
          </svg>
          <span>{messageSuccess}</span>
          <button type='button' className='ml-8' onClick={messageBtnHandler}>
            <svg
              className='h-6 w-6 hover:text-gray-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      )}

      {messageError && (
        <div className='bg-gray-600 absolute bottom-0 right-0 mr-10 mb-10 pl-2 pr-2 py-3 rounded-md flex items-center'>
          <svg
            className='h-5 w-5 text-red-600'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
          <span>{messageError}</span>
          <button type='button' className='ml-8' onClick={messageBtnHandler}>
            <svg
              className='h-6 w-6 hover:text-gray-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default MovieUpdateForm;
