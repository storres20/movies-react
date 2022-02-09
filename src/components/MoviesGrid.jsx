import { useEffect, useState } from "react";
import get from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  //let movies = [];
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    get("/discover/movie")
    .then(data => {
      setMovies(data.results);
    });
  }, []);
  
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </ul>
    );
}