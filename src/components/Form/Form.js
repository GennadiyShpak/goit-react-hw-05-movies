import { useState } from 'react';

function Form({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  function onChangeHandler({ target }) {
    const { value } = target;
    setSearchValue(value);
  }

  function onClickSubmiit(e) {
    e.preventDefault();

    if (searchValue.trim() === '') {
      return ;
    }
    // onSubmit(searchValue);
console.log(searchValue);
    reset();
  }

  function reset() {
    setSearchValue('');
  }

  return (
    <form action="submit" onSubmit={onClickSubmiit}>
      <input type="text" onChange={onChangeHandler} />
      <button type="submit">Search</button>
    </form>
  );
}
export default Form;
