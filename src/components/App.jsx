import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from '../pages/HomePage';
import NotFound from '../pages/NotFoundPage';
import MoviesPage from '../pages/MoviesPage';
import Layout from './Layout/Layout';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:filmId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
