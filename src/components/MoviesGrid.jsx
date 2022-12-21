import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import styles from './MoviesGrid.module.css';
import ScrollButton from './ScrollButton';
import SearchBar from './SearchBar';

export default function MoviesGrid() {
  /* Load Redux State */
  const movies = useSelector((state) => state.movie);
  // *********************************

  return (
    <div>
      {/* Filter Search Bar */}
      <SearchBar />

      <ul className={styles.moviesGrid}>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ul>

      {/* Scroll button for going back to TOP page */}
      <ScrollButton />
    </div>
  );
}
