import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'bb3f2a9bd6a374d8a5257ae7f0ad6ee7',
  },
});

const getFilmsByTrending = async () => {
  try {
    const response = await AXIOS.get(`trending/all/day?`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log('error', { error });
  }
};
const getFilmsByQuerry = async q => {
  try {
    const response = await AXIOS.get(`search/movie?&query=${q}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log('error', { error });
  }
};

const getFilmsById = async id => {
  try {
    const response = await AXIOS.get(`/movie/${id}?`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log('error', { error });
  }
};

const API = { getFilmsByTrending, getFilmsByQuerry, getFilmsById };

export default API;
