import { useEffect, useState } from 'react';

import Form from '../components/Form';
import MovieSearch from '../components/MovieSearch';

import API from '../services/filmService';

function MoviesPage({ onClick }) {
  const [searchQurerry, setSearchQurerry] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if (!searchQurerry) {
      return;
    }
    const getMoviesByQuerryHandler = async () => {
      const { results } = await API.getFilmsByQuerry(searchQurerry);
      setSearchResults(results);
    };
    getMoviesByQuerryHandler();
  }, [searchQurerry]);

  const searchImputHandler = data => {
    if (data === searchQurerry) {
      return;
    }
    setSearchQurerry(data);
  };

  return (
    <>
      <Form onSubmit={searchImputHandler} />
      {searchResults && (
        <MovieSearch searchResult={searchResults} onClick={onClick} />
      )}
    </>
  );
}
export default MoviesPage;
