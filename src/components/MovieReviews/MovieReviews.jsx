import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../../services/API.JS';

const MovieReviews = () => {
  const { filmId } = useParams();
  const [revives, setRevives] = useState([]);
  useEffect(() => {
    fetchReviewsById(filmId).then(data => setRevives(data));
  }, [filmId]);
  return (
    <div>
      <ul>
        {revives.length > 0
          ? revives.map(revive => (
              <li key={revive.id}>
                <h4>{revive.author}</h4>
                <p>{revive.content}</p>
              </li>
            ))
          : "Sorry, there isn't any info"}
      </ul>
    </div>
  );
};

export default MovieReviews;
