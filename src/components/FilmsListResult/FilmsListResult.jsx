import { Link, useLocation } from 'react-router-dom';
import s from './FilmsListResult.module.css';

const FilmsListResult = ({ films }) => {
  const location = useLocation();

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>
        <button className="button" type="button">
          Go back
        </button>
      </Link>
      <ul>
        {films &&
          films.map(film => {
            return (
              <li className={s.info_wrapper} key={film.id}>
                <Link state={{ from: location }} to={`/movies/${film.id}`}>
                  <div className={s.info_container}>
                    {film.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                        alt={`${film.original_title}`}
                      />
                    ) : (
                      <img
                        src={`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`}
                        alt={`${film.original_title}`}
                      />
                    )}

                    <div className={s.info_text}>
                      <h4>{film.original_title}</h4>
                      <p>Votes: {film.vote_average}</p>
                      <p>Release date: {film.release_date}</p>
                      <p>{film.overview || 'No overview yet'}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FilmsListResult;
