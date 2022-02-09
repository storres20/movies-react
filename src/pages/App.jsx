import { MoviesGrid } from "../components/MoviesGrid";
import styles from "./App.module.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "../components/AboutPage";
import NotFoundPage from "../components/NotFoundPage";
import Navbar from "../components/Navbar";
import MovieDetails from "./MovieDetails";

export function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MoviesGrid />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/movies/:movieId" element={<MovieDetails/>} />
          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}



