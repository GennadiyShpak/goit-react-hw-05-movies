import { Link, useRouteMatch } from 'react-router-dom';
import notFound from '../../img/notFound.png';

import s from './MovieCard.module.css';

const MovieCard = ({ films }) => {
  const { url } = useRouteMatch();
  return (
    <ul className={s.homePageList}>
      {films.map(({ id, backdrop_path, name, title }) => (
        <li key={id} className={s.homePageItem}>
          <Link to={`${url}/${id}`}>
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
      ))}
    </ul>
  );
};
export default MovieCard;
