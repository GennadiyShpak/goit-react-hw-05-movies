import { useEffect, useState } from 'react';

import API from '../services/filmService';
import ActorsCard from '../components/ActorsCard';
import s from '../viewStyle/Cast.module.css';

const Cast = ({ id }) => {
  const [actorsState, setActorsState] = useState([]);
  useEffect(() => {
    const getMovieActors = async () => {
      const { cast } = await API.getCastFilmsById(id);
      setActorsState(cast);
    };
    getMovieActors();
  }, [id]);
  return (
    <ul className={s.list}>
      {actorsState &&
        actorsState.map(profile => (
          <ActorsCard key={profile.id} info={profile} />
        ))}
    </ul>
  );
};

export default Cast;
