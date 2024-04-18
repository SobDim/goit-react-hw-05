import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../services/API.JS';
import Loader from '../components/Loader/Loader';

const MovieDetailsPage = () => {
  const { filmId } = useParams();
  const [film, setFilms] = useState(null);

  useEffect(() => {
    fetchMoviesById(filmId).then(data => setFilms(data));
  }, [filmId]);

  if (!film) {
    return <Loader />;
  }
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={`${film.original_title}`}
        />
        <h3>{film.original_title}</h3>
        <p>User Score: {film.vote_average}</p>
        <p> Overview:{film.overview}</p>
        <p>Release Date: {film.release_date}</p>
        <p>Genres: {film.genres.map(genre => genre.name).join(', ')}</p>
      </div>

      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
