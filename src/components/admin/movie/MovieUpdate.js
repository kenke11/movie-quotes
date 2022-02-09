import { useParams } from 'react-router-dom';
import MovieUpdateForm from './MovieUpdateForm';
import { useEffect, useState } from 'react';
import MovieQuotes from '../quote/MovieQuotes';

const MovieUpdate = () => {
  const params = useParams();

  const [movie, setMovie] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [movieId, setMovieId] = useState(null);

  useEffect(() => {
    setIsLoading(false);
    fetch(`http://127.0.0.1:8000/api/movie/${params.id}/quotes`)
      .then((res) => res.json())
      .then((result) => {
        setMovie(result['0']);
        setQuotes(result['0'].quotes);
        setMovieId(result['0'].id);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log('request failed', error);
        setError(error);
      });
  }, [params.id]);

  return (
    <div className='w-10/12 md:w-8/12 m-auto mt-10'>
      <h2 className='mb-3 text-3xl font-serif font-bold'>Movie Update</h2>

      {isLoading && !error && (
        <div className='w-full mb-3'>
          <MovieUpdateForm movie={movie} />

          <MovieQuotes quotes={quotes} movieId={movieId} />
        </div>
      )}
    </div>
  );
};

export default MovieUpdate;
