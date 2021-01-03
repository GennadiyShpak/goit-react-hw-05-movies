import { useState } from 'react';

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
  };

  return (
    <form action="submit" onSubmit={onClickSubmiit}>
      <input type="text" onChange={onChangeHandler} />
      <button type="submit">Search</button>
    </form>
  );
}
export default Form;
