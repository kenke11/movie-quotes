import MovieCreateForm from './MovieCreateForm';
import { useTranslation } from 'react-i18next';

const MovieCreate = () => {
  const { t } = useTranslation();

  return (
    <div className='w-10/12 md:w-8/12 m-auto mt-10'>
      <h2 className='mb-3 text-3xl font-serif font-bold'>{t('add_a_movie')}</h2>

      <div className='w-full mb-3'>
        <MovieCreateForm />
      </div>
    </div>
  );
};

export default MovieCreate;
