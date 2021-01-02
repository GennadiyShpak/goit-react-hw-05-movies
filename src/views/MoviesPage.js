import { useEffect, useState } from 'react';

import Form from '../components/Form';

import API from '../services/filmService';

function MoviesPage() {

  const getMoviesOnSearch = async (data)=> {
    useEffect(() => {
      const result = await API.getFilmsByQuerry(data);
      console.log(result);
    }, []);
console.log(data);
  }
  return <Form onSubmit={getMoviesOnSearch} />;
}
export default MoviesPage;
