import MovieCard from '../MovieCard';
import s from './MovieSearch.module.css';

const MovieSearch = ({ searchResult }) => {
  return (
    <ul className={s.homePageList}>
      {searchResult.map(movieInfo => (
        <MovieCard key={movieInfo.id} movieInfo={movieInfo} />
      ))}
    </ul>
  );
};

export default MovieSearch;
