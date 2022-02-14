import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Quote from './Quote';
import { BookLoader } from 'react-awesome-loaders';
import { useTranslation } from 'react-i18next';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const Quotes = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { i18n } = useTranslation('home');

  const params = useParams();

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      props.InitMovie(params.id);
      setIsLoading(true);
    }, 1500);
  }, []);

  return (
    <>
      {props.movie.length > 0 && (
        <div className='pt-24 md:pt-36'>
          <div className='top-0 py-7 px-10 fixed w-full bg-gray-550 -zz-10'>
            <h2 className='flex  text-white text-5xl'>
              {props.movie[0].name[i18n.language]}
            </h2>
          </div>
          {isLoading &&
            props.movie[0].quotes.length > 0 &&
            props.movie[0].quotes.map((quote) => (
              <Quote key={quote.id} quote={quote} />
            ))}
        </div>
      )}
      {!isLoading && (
        <div className='flex justify-center mt-20'>
          <BookLoader
            background={'linear-gradient(135deg,"#545151", "#E0E7FF")'}
            desktopSize={'100px'}
            mobileSize={'80px'}
            shadowColor={'rgba(255,255,255,0.55)'}
            textColor={'#ffffff'}
          />
        </div>
      )}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
