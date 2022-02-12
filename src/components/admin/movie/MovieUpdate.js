import { useParams } from 'react-router-dom';
import MovieUpdateForm from './MovieUpdateForm';
import { useEffect, useState } from 'react';
import MovieQuotes from '../quote/MovieQuotes';
import { useTranslation } from 'react-i18next';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';

const MovieUpdate = (props) => {
  const params = useParams();

  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsLoading(false);
    props.InitMovie(params.id);
    setIsLoading(true);
  }, [props.InitMovie]);

  return (
    <div className='w-10/12 md:w-8/12 m-auto mt-10'>
      <h2 className='mb-3 text-3xl font-serif font-bold'>
        {t('movie_update')}
      </h2>

      {isLoading && props.movie.length > 0 && (
        <div className='w-full mb-3'>
          <MovieUpdateForm movie={props.movie['0']} />

          <MovieQuotes
            quotes={props.movie['0'].quotes}
            movieId={props.movie['0'].id}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    InitMovie: (id) => dispatch(actions.InitMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieUpdate);
