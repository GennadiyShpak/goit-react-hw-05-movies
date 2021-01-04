import s from './MovieOverView.module.css';

const MovieOverView = ({ movieDetail }) => {
  const {
    original_title,
    title,
    backdrop_path,
    overview,
    genres,
  } = movieDetail;
  return (
    <>
      <div className={s.container}>
        {/* <Link className={s.goBackBtn}>Go back</Link> */}
        <div className={s.movieWrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
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
      </div>
      ,
    </>
  );
};

export default MovieOverView;
