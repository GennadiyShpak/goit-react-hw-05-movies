import { useState, useEffect } from 'react';

import API from '../services/filmService';
import s from '../viewStyle/HomePage.module.css';
import MovieCard from '../components/MovieCard';

function HomePage() {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    try {
      async function getFilms() {
        const { results } = await API.getFilmsByTrending();
        setFilms(results);
      }
      getFilms();
    } catch {}
  }, []);

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
    </div>
  );
}

export default HomePage;
