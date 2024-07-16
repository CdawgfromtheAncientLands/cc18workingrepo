import React, { useState } from 'react';
//Set default rating to 1
const defaultMovieRating = 1;
//List of movies
const moviesData = [
  {title: 'Good Will Hunting', rating: defaultMovieRating, image: 'https://m.media-amazon.com/images/I/71JWyELjo8L._AC_UF894,1000_QL80_.jpg'},
  {title: 'The Good, the Bad and the Ugly', rating: defaultMovieRating, image: 'https://static.tvtropes.org/pmwiki/pub/images/71w8nyanmxl_sy679.jpg'},
  {title: 'A Few Good Men', rating: defaultMovieRating, image: 'https://m.media-amazon.com/images/M/MV5BMmRlZDQ1MmUtMzE2Yi00YTkxLTk1MGMtYmIyYWQwODcxYzRlXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_FMjpg_UX1000_.jpg'},
  {title: '12 Angry Men', rating: defaultMovieRating, image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg'},
  {title: 'The Good Dinosaur', rating: defaultMovieRating, image: 'https://m.media-amazon.com/images/I/71OOB-3-9GL._AC_UF894,1000_QL80_.jpg'},
  {title: 'Good Morning, Vietnam', rating: defaultMovieRating, image: 'https://m.media-amazon.com/images/I/5144Z06DSXL._AC_UF894,1000_QL80_.jpg'},
  {title: 'American Dad', rating: defaultMovieRating, image: 'https://m.media-amazon.com/images/I/61LXQUtptbL._AC_UF894,1000_QL80_.jpg'},
];

const Movies = ({setSelectedMovie}) => {
    const [movies, setMovies] = useState(moviesData);
  
    const updateMovieRating = (index, newRating) => {
      const updatedMovies = [...movies];
      updatedMovies[index].rating = newRating;
      setMovies(updatedMovies);
    };
  
    return (
      <div>
        <h1>Movies List</h1>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie.title} - {movie.rating} stars
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Movies;
  export {moviesData};