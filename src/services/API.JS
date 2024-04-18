import axios from 'axios';

// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
// // 'https://api.themoviedb.org/3/search/movie?include_adult=true&language=en-US&page=1';
// const urlDetail = 'https://api.themoviedb.org/3/movie/';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    accept: 'application/json',

    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWJiMDhkMmEzZDUwODU1MzhjNDVlYjc5MjQyMjQ4YiIsInN1YiI6IjY2MWU3YjQyMjE2MjFiMDE3ZGYwYzkzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qvdQMA4gXfjAGMFz0dogsmUTe0a3DDnN1jWOKmbSVpA',
    // language: 'en-US',
  },
};

//

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get('trending/movie/day', options);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesById = async filmID => {
  try {
    const { data } = await axios.get(`movie/${filmID}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//
export const fetchReviewsById = async filmID => {
  try {
    const { data } = await axios.get(
      `/movie/${filmID}/reviews?language=en-US&page=1`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCastsById = async filmID => {
  try {
    const { data } = await axios.get(`/movie/${filmID}/credits`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
