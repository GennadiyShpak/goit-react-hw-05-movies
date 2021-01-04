import MovieCard from '../MovieCard';

const SearchResult = ({ searchResult }) => {
  return <MovieCard films={searchResult} />;
};

export default SearchResult;
