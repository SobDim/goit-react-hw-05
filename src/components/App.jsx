import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

// const Home = lazy(() => import('../pages/HomePage'));
// const Layout = lazy(() => import('./Layout/Layout'));
// const NotFound = lazy(() => import('../pages/NotFoundPage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
// const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
// const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
import Layout from './Layout/Layout';
import Home from '../pages/HomePage';
import NotFound from '../pages/NotFoundPage';
import MoviesPage from '../pages/MoviesPage';
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
