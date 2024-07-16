import React from 'react';
import './MovieSelector.css'; // Import the CSS file for styling

const MovieSelector = ({ movies, selectedMovie, setSelectedMovie }) => {
  return (
    <div>
      <select onChange={(e) => setSelectedMovie(movies[e.target.value])}>
        {movies.map((movie, index) => (
          <option key={index} value={index}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.title}</h2>
          <div className="image-container">
            <img src={selectedMovie.image} alt={selectedMovie.title} className="movie-image" />
          </div>
          <p>Rating: {selectedMovie.rating} stars</p>
        </div>
      )}
    </div>
  );
};

export default MovieSelector;