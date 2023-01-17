import { useState } from "react";
import moviesFromJson from "../data/movies.json"
import './Main.css'
function Main() {


    const [moviesArr, setMoviesArr] = useState(moviesFromJson)

    const deleteMovie = (idOfTheMovieToDelete) => {
        const newListOfMovies = moviesArr.filter((movie) => {
            return movie.id !== idOfTheMovieToDelete;
        });
        setMoviesArr(newListOfMovies);
    }
  return (
    <div className="Main">

    <h2>Current number of Movies: {moviesArr.length}</h2>

      {moviesArr.map((movieDetails) => {
        return(
            <div key={movieDetails} className="card movie">
                <h3>{movieDetails.title}</h3>
                <p>Rating: {movieDetails.rating}</p>
                <p>Year: {movieDetails.year}</p>
                <p>Genre: {movieDetails.genres[0]}</p>
                <img src={movieDetails.imgURL} alt=""/>
                <button onClick={() => {deleteMovie(movieDetails.id)}}>Delete</button>
            </div>
            );
      })}
    </div>
  );
}

export default Main;
