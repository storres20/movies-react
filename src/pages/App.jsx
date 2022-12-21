import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
// Redux
import { getMovie } from '../redux/movies/movies';
import { getAllData } from '../redux/movies/allData';
// ***
import MoviesGrid from '../components/MoviesGrid';
import styles from './App.module.css';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import NavbarRB from '../components/NavbarRB';
import MovieDetails from './MovieDetails';

export default function App() {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* Dispatch only once */
  useEffect(() => {
    dispatch(getMovie());
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavbarRB />
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MoviesGrid />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
