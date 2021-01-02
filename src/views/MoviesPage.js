import { useEffect, useState } from 'react';

import Form from '../components/Form';

import API from '../services/filmService';

function MoviesPage() {
  function getMoviesOnSearch() {
    useEffect(() => {
      const result = API.getFilmsByQuerry();
      console.log(result)01;
    }, [input]);
  }
  return <Form onSubmit={} />;
}
export default MoviesPage;
