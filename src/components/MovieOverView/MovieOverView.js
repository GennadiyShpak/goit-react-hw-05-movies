import { Route, NavLink } from 'react-router-dom';
import s from './MovieOverView.module.css';
import Reviews from '../../views/Reviews';
import Cast from '../../views/Cast';

const MovieOverView = ({ movieDetail }) => {
  const {
    original_title,
    title,
    backdrop_path,
    overview,
    genres,
    poster_path,
    id,
  } = movieDetail;
  return (
    <>
      <div className={s.container}>
        {/* <Link className={s.goBackBtn}>Go back</Link> */}
        <div className={s.movieWrapper}>
          <img
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w400/${backdrop_path}`
                : `https://image.tmdb.org/t/p/w400/${poster_path}`
            }
            alt={title}
          />
          <div className={s.wrapper}>
            <h2 className={s.movieTitle}>{original_title || title}</h2>
            <div className={s.overview}>{overview}</div>
            <ul className={s.genresList}>
              <h3 className={s.genresTitle}>Genres</h3>
              <div className={s.genresWrapper}>
                {genres.map(({ id, name }) => (
                  <li key={id} className={s.genresItem}>
                    {name}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
        <div className={s.additionalInfoContainer}>
          <h2 className={s.additionalTitle}>Aditional info</h2>
          <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
          <NavLink to={`/movies/${id}/review`}>Review</NavLink>
        </div>
        <Route path={`/movies/:movieId/cast`}>{id && <Cast id={id} />}</Route>
        <Route path={`/movies/:movieId/review`}>
          {id && <Reviews id={id} />}
        </Route>
      </div>
    </>
  );
};

export default MovieOverView;
