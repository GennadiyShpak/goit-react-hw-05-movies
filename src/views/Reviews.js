import { useEffect, useState } from 'react';

import API from '../services/filmService';
import s from '../viewStyle/Cast.module.css';
import MovieReviews from '../components/MovieReviews';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getMovieReviews = async () => {
      const { results } = await API.getReviewsFilmsById(id);
      setReviews(results);
    };
    getMovieReviews();
  }, [id]);
  return (
    <ul className={s.list}>
      {reviews.length !== 0 ? (
        reviews.map(review => <MovieReviews key={review.id} info={review} />)
      ) : (
        <h3>Reviews not found</h3>
      )}
    </ul>
  );
};
export default Reviews;
