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

      // Conditional Rendering with "Element Variables"
  let titleMessage;
  if(moviesArr.length > 0){
    titleMessage = <h2>Current number of movies: {moviesArr.length}</h2>;
  } else {
    titleMessage = <h2>Sorry, no movies to display</h2>
  }


  return (
    <div className="Main">

    {titleMessage}

      {moviesArr.map((movieDetails) => {
        return(
            <div key={movieDetails} className="card movie">
                <h3>{movieDetails.title}</h3>

                {movieDetails.imgURL 
                ? <img src={movieDetails.imgURL} alt=""/>
                : <img src="https://via.placeholder.com/182x268" alt=""/>
                }

                <p>Rating: {movieDetails.rating}</p>

                {/*  Conditional Rendering with "Logical && Operator"  */}
                {movieDetails.rating > 8 && <p>Recommended</p>}
                <p>Year: {movieDetails.year}</p>
                <p>Genre: {movieDetails.genres[0]}</p>

                <button onClick={() => {deleteMovie(movieDetails.id)}}>Delete</button>
            </div>
            );
      })}
    </div>
  );
}

export default Main;
