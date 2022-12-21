import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import styles from './MoviesGrid.module.css';
import ScrollButton from './ScrollButton';
import SearchBar from './SearchBar';

export default function MoviesGrid() {
  /* Load Redux State */
  const movies = useSelector((state) => state.movie);
  const allData = useSelector((state) => state.allData);

  // *********************************

  return (
    <div>
      {/* Filter Search Bar */}
      <SearchBar allData={allData} />

      <ul className={styles.moviesGrid}>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ul>

      {/* Scroll button for going back to TOP page */}
      <ScrollButton />
    </div>
  );
}
