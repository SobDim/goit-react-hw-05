import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../services/API.JS';
import Loader from '../components/Loader/Loader';

const MovieDetailsPage = () => {
  const { filmId } = useParams();
  const [film, setFilms] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesById(filmId).then(data => setFilms(data));
  }, [filmId]);

  if (!film) {
    return <Loader />;
  }
  return (
    <div className="container">
      <Link to={location.state?.from ?? '/'}>
        <button className="button" type="button">
          Go back
        </button>
      </Link>
      <div className="info_wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={`${film.original_title}`}
        />
        <div className="info_text">
          <h3>{film.original_title}</h3>
          <p>User Score: {film.vote_average}</p>
          <p> Overview:{film.overview}</p>
          <p>Release Date: {film.release_date}</p>
          <p>Genres: {film.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <div>
        <ul className="list_details">
          <li>
            <Link className="button" to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className="button" to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
