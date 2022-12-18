/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SearchBar.module.css';
// Redux
import { updateMovie } from '../redux/movies/movies';
// ***

function SearchBar() {
/* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* Load Redux State */
  const movies = useSelector((state) => state.movie);

  // *********************************

  /* allData = movies (original values) */
  const [allData] = useState(movies); // fixed values

  // Filter search bar
  const handleSearch = (event) => {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = allData.filter((user) => user.title.toLowerCase().includes(keyword.toLowerCase()));

      dispatch(updateMovie(results));
    } else {
      dispatch(updateMovie(allData));
    // If the text field is empty, show all users
    }
  };
  return (
    <div>
      <div className={styles.divFlex}>
        <input className={styles.inputFlex} type="text" placeholder="Search..." onChange={(event) => handleSearch(event)} />
      </div>
    </div>
  );
}

export default SearchBar;
