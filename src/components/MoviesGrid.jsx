import { useEffect, useState } from "react";
import get from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  //let movies = [];
  const [movies, setMovies] = useState([]);
  
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    get("/discover/movie")
      .then(data => {
        setMovies(data.results);
        setAllData(data.results);
      });
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = allData.filter((user) => {
        //return user.title.toLowerCase().startsWith(keyword.toLowerCase());
        return user.title.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });

      setMovies(results);

    } else {
      setMovies(allData);
      // If the text field is empty, show all users
    }

  }

  return (
    <div>
      <input className="bg-dark text-white ml-5 mr-5" type="text" placeholder='Search...' onChange={event => handleSearch(event)} />

      <ul className={styles.moviesGrid}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })}
      </ul>
    </div>
  );
}