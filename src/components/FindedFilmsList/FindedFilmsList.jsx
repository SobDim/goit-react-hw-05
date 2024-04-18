import { Link, useLocation } from 'react-router-dom';

const FinderFilmsList = ({ films }) => {
  console.log(films);
  const location = useLocation;
  return (
    <div>
      <ul>
        {films &&
          films.map(film => {
            <li key={film.id}>
              <Link state={{ from: location }} to={`/movies/${film.id}`}></Link>
              <h4>{film.title}</h4>
            </li>;
          })}
      </ul>
    </div>
  );
};

export default FinderFilmsList;
