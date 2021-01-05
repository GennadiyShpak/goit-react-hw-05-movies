import s from './MovieReviews.module.css';

const MovieReviews = ({ info }) => {
  const { author, content } = info;
  return (
    <li className={s.item}>
      <h3 className={s.item}>{author}</h3>
      <p className={s.item}>{content}</p>
    </li>
  );
};
export default MovieReviews;
