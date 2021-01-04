import { useState } from 'react';

import s from './Form.module.css';

function Form({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = ({ target }) => {
    const { value } = target;
    setSearchValue(value);
  };

  const onClickSubmiit = e => {
    e.preventDefault();

    if (searchValue.trim() === '') {
      return;
    }
    onSubmit(searchValue);
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
