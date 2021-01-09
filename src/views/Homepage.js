import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';

import API from '../services/filmService';
import s from '../viewStyle/HomePage.module.css';
import MovieCard from '../components/MovieCard';
import useStyles from '../hook/pagination';

function HomePage() {
  const [films, setFilms] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const history = useHistory();
  const location = useLocation();
  const style = useStyles();
  const adressBarPage = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    setPage(adressBarPage);
  }, [adressBarPage]);

  useEffect(() => {
    try {
      async function getFilms() {
        const results = await API.getFilmsByTrending(page);
        setFilms(results.results);
        setTotalPages(results.total_pages);
      }
      getFilms();
    } catch {}
  }, [page]);

  const onHandlePage = (event, page) => {
    setPage(page);
    history.push({
      ...location,
      search: `page=${page}`,
    });
  };
  return (
    <div>
      <h1 className={s.headTitle}>Trending today</h1>
      {films && (
        <ul className={s.homePageList}>
          {films.map(movieInfo => (
            <MovieCard key={movieInfo.id} movieInfo={movieInfo} />
          ))}
        </ul>
      )}
      <Pagination
        className={style.root}
        count={totalPages}
        page={Number(page)}
        onChange={onHandlePage}
      />
    </div>
  );
}

export default HomePage;
