import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";
import Youtube from "../../components/Youtube/Youtube";
import Similar from "../../components/Similar/Similar";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [moviecast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getData();
    getCast();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  };
  const getCast = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCast(data.cast));
  };

  return (
    <>
      <div className="main">
        <div className="poster_Img">
          <img
            src={`https://image.tmdb.org/t/p/original${
              movie && movie.backdrop_path
            }`}
          />
        </div>
        <div className="poster_Img_Overlay">
          <div className="movie_photo">
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.poster_path
              }`}
            />
          </div>
          <div className="poster_detail">
            <div className="poster_title_name">
              <h1>{movie.original_title}</h1>
            </div>
            <div className="genre">
              {movie.genres &&
                movie.genres.map((genre) => (
                  <h1 key={genre.id}>{genre.name}</h1>
                ))}
            </div>
            <div className="more_detail">
              <div className="poster_releg  icon_photo">
                <i class="fa-solid fa-calendar-days"></i>
                <h1>{movie.release_date}</h1>
              </div>
              <div className="poster_runtime icon_photo">
                <i class="fa-solid fa-star"></i>
                <h1>{movie.runtime}</h1>
              </div>
              <div className="poster_popularity icon_photo">
                <i class="fa-solid fa-fire"></i>
                <h1>{movie.popularity}</h1>
              </div>
              <div className="poster_original_language icon_photo">
                <i class="fa-solid fa-language"></i>
                <h1>{movie.original_language}</h1>
              </div>
            </div>
            <div className="poster_overview">
              <h1>{movie.overview}</h1>
            </div>
            <div className="cast_details">
              {moviecast.slice(0, 10).map((movie) => (
                <>
                  <div className="poster_cast_name">
                    <img
                      key={movie.id}
                      src={`https://image.tmdb.org/t/p/original${movie.profile_path}`}
                      alt={movie.name}
                    />
                    <h1>{movie.original_name}</h1>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <Youtube />
        <Similar />
      </div>
    </>
  );
};

export default Movie;
