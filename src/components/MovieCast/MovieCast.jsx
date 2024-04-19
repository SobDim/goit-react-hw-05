import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastsById } from '../../services/API.JS';

const MovieCast = () => {
  const { filmId } = useParams();
  const [casts, setCast] = useState([]);
  useEffect(() => {
    fetchCastsById(filmId).then(data => setCast(data));
  }, [filmId]);
  return (
    <ul>
      {casts.length > 0
        ? casts.map(cast => {
            return (
              <li key={cast.id}>
                {cast.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={`${cast.name}`}
                    width={150}
                  />
                ) : (
                  <img
                    src={`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`}
                    alt={`${cast.name}`}
                    width={150}
                  />
                )}

                <h4>{cast.name}</h4>
                <p>Character: {cast.character}</p>
              </li>
            );
          })
        : "Sorry, there isn't any info"}
    </ul>
  );
};

export default MovieCast;
