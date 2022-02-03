import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Quote from './Quote';
import { BookLoader } from 'react-awesome-loaders';

const Quotes = () => {
  const [movie, setMovie] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      fetch(`http://127.0.0.1:8000/api/movie/${params.id}/quotes`)
        .then((res) => res.json())
        .then((result) => {
          setMovie(result['0']);
          setQuotes(result['0'].quotes);
          setIsLoading(true);
        })
        .catch((error) => {
          console.log('request failed', error);
          setError(error);
        });
    }, 1500);
  }, [params.id]);

  return (
    <div className='pt-24 md:pt-36'>
      <div className='top-0 py-5 px-10 fixed w-full bg-gray-550'>
        <h2 className='flex  text-white text-5xl'>
          {isLoading && !error && movie.name.en}
        </h2>
      </div>
      {isLoading &&
        !error &&
        quotes.length > 0 &&
        quotes.map((quote) => <Quote key={quote.id} quote={quote} />)}
      {!isLoading && !error && (
        <div className='flex justify-center'>
          <BookLoader
            background={'linear-gradient(135deg,"#545151", "#E0E7FF")'}
            desktopSize={'100px'}
            mobileSize={'80px'}
            shadowColor={'rgba(255,255,255,0.55)'}
            textColor={'#ffffff'}
          />
        </div>
      )}
      {!isLoading && error && <div>error</div>}
      {}
    </div>
  );
};

export default Quotes;
