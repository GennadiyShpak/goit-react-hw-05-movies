import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import API from '../services/filmService';
import MovieOverView from '../components/MovieOverView';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getFilmsByIdHandler = async () => {
      const result = await API.getFilmsById(movieId);
      setMovieDetail(result);
    };

    getFilmsByIdHandler();
  }, [movieId]);

  return <>{movieDetail && <MovieOverView movieDetail={movieDetail} />}</>;
};

export default MovieDetailsPage;
