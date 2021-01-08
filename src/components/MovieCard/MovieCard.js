import { Link, useLocation } from 'react-router-dom';
import notFound from '../../img/notFound.png';

import s from './MovieCard.module.css';

const MovieCard = ({ movieInfo }) => {
  const location = useLocation();
  const { id, backdrop_path, name, title } = movieInfo;
  return (
    <li className={s.homePageItem}>
      <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
        <>
          <img
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w300/${backdrop_path}`
                : notFound
            }
            alt={name || title}
          />
          <h2 className={s.movieTitle}>{name || title}</h2>
        </>
      </Link>
    </li>
  );
};
export default MovieCard;
