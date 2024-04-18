import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/API.JS';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(data => setFilms(data));
  }, []);
  return (
    <div>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>
              {film.original_title || film.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
