import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';

import Form from '../components/Form';
import MovieSearch from '../components/MovieSearch';
import NotFound from '../views/NotFound';
import API from '../services/filmService';
import useStyles from '../hook/pagination';

function MoviesPage() {
  const [searchQurerry, setSearchQurerry] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('pending');
  const style = useStyles();
  const location = useLocation();
  const history = useHistory();

  const adressBarQuerry = new URLSearchParams(location.search).get('querry');
  const adressBarPage = new URLSearchParams(location.search).get('page');

  useEffect(() => {
    if (adressBarQuerry) {
      setSearchQurerry(adressBarQuerry);
      setPage(adressBarPage);
    }
  }, [adressBarPage, adressBarQuerry]);

  useEffect(() => {
    if (!searchQurerry) {
      return;
    }
    try {
      const getMoviesByQuerryHandler = async () => {
        const results = await API.getFilmsByQuerry(searchQurerry, page);
        setSearchResults(results.results);
        setTotalPages(results.total_pages);
        setStatus('resolved');
      };
      getMoviesByQuerryHandler();
    } catch (error) {
      setStatus('rejected');
      console.error(error);
    }
  }, [page, searchQurerry]);

  const onHandlePage = (event, page) => {
    setPage(page);
    history.push({
      ...location,
      search: `querry=${searchQurerry}&page=${page}`,
    });
  };
  const searchImputHandler = data => {
    if (data === searchQurerry) {
      return;
    }
    setSearchQurerry(data);
  };

  if (status === 'pending') {
    return (
      <>
        <Form onSubmit={searchImputHandler} />
        <h1> Enter movie name</h1>
      </>
    );
  }
  if (status === 'rejected') {
    return <NotFound />;
  }

  if (status === 'resolved') {
    return (
      <>
        <Form onSubmit={searchImputHandler} />
        <MovieSearch searchResult={searchResults} />
        <Pagination
          className={style.root}
          count={totalPages}
          page={Number(page)}
          onChange={onHandlePage}
        />
      </>
    );
  }
}
export default MoviesPage;
