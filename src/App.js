import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import InputBar from "./components/SearchMovies/InputBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="IMDB" element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
