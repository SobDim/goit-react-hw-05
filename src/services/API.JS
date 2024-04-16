import axios from 'axios';

const url =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWJiMDhkMmEzZDUwODU1MzhjNDVlYjc5MjQyMjQ4YiIsInN1YiI6IjY2MWU3YjQyMjE2MjFiMDE3ZGYwYzkzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qvdQMA4gXfjAGMFz0dogsmUTe0a3DDnN1jWOKmbSVpA',
  },
};

axios
  .get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
