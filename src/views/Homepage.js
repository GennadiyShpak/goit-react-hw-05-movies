import { useState, useEffect } from 'react';

import API from '../services/filmService';

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
      <h1>Trending today</h1>
      {films && (
        <ul>
          {films.map(movie => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.name || movie.title}
              />
              <h2>{movie.name || movie.title}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
