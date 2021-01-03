const SearchResult = ({ searchResult }) => {
  console.log(searchResult);
  return (
    <ul>
      {searchResult.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default SearchResult;
