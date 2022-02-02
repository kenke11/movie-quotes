import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Quote from './Quote';

const Quotes = () => {
  const [movie, setMovie] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const movieFetched = async () => {
    await fetch(`http://127.0.0.1:8000/api/movie/${params.id}`)
      .then((res) => res.json())
      .then((result) => {
        setMovie(result);
      });
    await setIsLoading(true);
  };

  useEffect(() => {
    setIsLoading(false);
    fetch(`http://127.0.0.1:8000/api/movie/${params.id}/quotes`)
      .then((res) => res.json())
      .then((result) => {
        setQuotes(result);
      });

    movieFetched();
  }, [params.id]);

  let loadedQuotes = [];

  for (const key in quotes) {
    loadedQuotes.push({
      id: key,
      movie_id: params.id,
      quote: {
        en: quotes[key].quote.en,
        ge: quotes[key].quote.ka,
      },
      quote_img: quotes[key].quote_img,
      created_at: quotes[key].created_at,
      updated_at: quotes[key].updated_at,
    });
  }

  return (
    <div className=' md:pt-36'>
      <div className='top-0 py-5 px-10 fixed w-full bg-gray-550'>
        <h2 className='flex  text-white text-5xl'>
          {isLoading && movie.name.en}
        </h2>
      </div>
      {isLoading &&
        loadedQuotes.map((quote) => <Quote key={quote.id} quote={quote} />)}
    </div>
  );
};

export default Quotes;
