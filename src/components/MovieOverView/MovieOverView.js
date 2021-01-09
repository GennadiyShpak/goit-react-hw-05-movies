import { lazy, Suspense } from 'react';
import { Route, NavLink, useHistory, useLocation } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './MovieOverView.module.css';
const Reviews = lazy(() =>
  import('../../views/Reviews.js' /*webpackChunkName: "review-page"*/),
);
const Cast = lazy(() =>
  import('../../views/Cast.js' /*webpackChunkName: "cast-page"*/),
);

const MovieOverView = ({ movieDetail }) => {
  const history = useHistory();
  const location = useLocation();
  const {
    original_title,
    title,
    backdrop_path,
    overview,
    genres,
    poster_path,
    id,
  } = movieDetail;

  const onGoBackBtn = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <div className={s.container}>
        <div>
          <button onClick={onGoBackBtn} className={s.goBackBtn}>
            go back
          </button>
        </div>

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
          <NavLink
            to={{
              pathname: `/movies/${id}/cast`,
              state: { from: location?.state?.from ?? '/' },
            }}
          >
            Cast
          </NavLink>
          <NavLink
            to={{
              pathname: `/movies/${id}/review`,
              state: { from: location?.state?.from ?? '/' },
            }}
          >
            Review
          </NavLink>
        </div>
        <Suspense
          fallback={
            <Loader type="BallTriangle" color="#000" height={180} width={180} />
          }
        >
          <Route path={`/movies/:movieId/cast`}>{id && <Cast id={id} />}</Route>
          <Route path={`/movies/:movieId/review`}>
            {id && <Reviews id={id} />}
          </Route>
        </Suspense>
      </div>
    </>
  );
};

export default MovieOverView;
