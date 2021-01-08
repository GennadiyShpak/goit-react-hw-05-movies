import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import s from './Form.module.css';

function Form({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const location = useLocation();

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    setSearchValue(value);
  };

  const onAdressBarHandler = () => {
    history.push({ ...location, search: `querry=${searchValue}` });
  };

  const onClickSubmiit = e => {
    e.preventDefault();

    if (searchValue.trim() === '') {
      return;
    }
    onSubmit(searchValue);
    onAdressBarHandler();
    reset();
  };
  const reset = e => {
    setSearchValue('');
  };

  return (
    <form action="submit" onSubmit={onClickSubmiit} className={s.form}>
      <input
        type="text"
        onChange={onChangeHandler}
        value={searchValue}
        className={s.searchInput}
      />
      <button type="submit">Search</button>
    </form>
  );
}
export default Form;
