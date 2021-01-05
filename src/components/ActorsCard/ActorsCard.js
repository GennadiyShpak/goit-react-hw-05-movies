import notFound from '../../img/notFound.png';
import s from './ActorsCard.module.css';

const ActorsCard = ({ info }) => {
  const { name, profile_path } = info;
  return (
    <li className={s.item}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w400/${profile_path}`
            : notFound
        }
        alt={name}
        width="200"
        height="200"
      />
      <h3>{name}</h3>
    </li>
  );
};

export default ActorsCard;
