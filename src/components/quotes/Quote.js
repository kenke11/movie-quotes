import { useTranslation } from 'react-i18next';

const Quote = ({ quote }) => {
  const { i18n } = useTranslation('home');

  return (
    <div className='bg-white rounded-xl my-10 max-w-2xl m-auto'>
      <img
        className='flex justify-center text-center m-auto rounded-xl w-full'
        src={`${process.env.REACT_APP_API_URL}/storage/${quote.quote_img}`}
        alt='quote img'
      />
      <div className='py-3 overflow-y-auto max-h-36'>
        <p className='flex justify-center  text-xl text-gray-800 px-5'>
          {quote.quote[i18n.language]}
        </p>
      </div>
    </div>
  );
};

export default Quote;
