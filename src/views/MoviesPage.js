import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Form from '../components/Form';
import MovieSearch from '../components/MovieSearch';

import API from '../services/filmService';

function MoviesPage() {
  const location = useLocation();
  const [searchQurerry, setSearchQurerry] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const adressBarQuerry = new URLSearchParams(location.search).get('querry');

  useEffect(() => {
    setSearchQurerry(adressBarQuerry);
  }, [adressBarQuerry]);

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
      {searchResults && <MovieSearch searchResult={searchResults} />}
    </>
  );
}
export default MoviesPage;
