import { useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { fetchFilmByQuery } from '../services/API.JS';
import SearchForm from '../components/SearchForm/SearchForm';
import FinderFilmsList from '../components/FilmsListResult/FilmsListResult';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchQ, setSearchQ] = useSearchParams();

  const handleSearchMovies = async query => {
    const response = await fetchFilmByQuery(query);
    setFilms(response.results);
  };

  useEffect(() => {
    const query = searchQ.get('query');
    if (query) {
      handleSearchMovies(query);
    }
  }, [searchQ]);

  return (
    <div className="container">
      <SearchForm SearchQ={setSearchQ} />
      <FinderFilmsList films={films} />
    </div>
  );
};

export default MoviesPage;
