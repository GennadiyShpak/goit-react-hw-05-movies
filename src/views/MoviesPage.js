import { useEffect, useState } from 'react';

import Form from '../components/Form';
import SearchResult from '../components/SearchResult';

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
        <SearchResult searchResult={searchResults} onClick={onClick} />
      )}
    </>
  );
}
export default MoviesPage;
