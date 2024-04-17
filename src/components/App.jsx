import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from '../pages/HomePage';
import NotFound from '../pages/NotFoundPage';
import MoviesPage from '../pages/MoviesPage';
import Layout from './Layout/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="MoviesPage" element={<MoviesPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
