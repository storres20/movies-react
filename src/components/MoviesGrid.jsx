/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import get from '../utils/httpClient';
import MovieCard from './MovieCard';
import styles from './MoviesGrid.module.css';
import ScrollButton from './ScrollButton';

export default function MoviesGrid() {
  // let movies = [];
  const [movies, setMovies] = useState([]);

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    get('/discover/movie')
      .then((data) => {
        setMovies(data.results);
        setAllData(data.results);
      });
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = allData.filter((user) => user.title.toLowerCase().includes(keyword.toLowerCase()));

      setMovies(results);
    } else {
      setMovies(allData);
      // If the text field is empty, show all users
    }
  };

  return (
    <div>
      <div className={styles.divFlex}>
        <input className={styles.inputFlex} type="text" placeholder="Search..." onChange={(event) => handleSearch(event)} />
      </div>

      <ul className={styles.moviesGrid}>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ul>

      {/* Scroll button for going back to TOP page */}
      <ScrollButton />
    </div>
  );
}
