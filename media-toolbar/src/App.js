import React, { useState } from 'react';
import Movies, { moviesData } from './components/Movies';
import MovieSelector from './components/MovieSelector';
//import RateMovieButton from './RateMovieButton';
//import UploadButton from './UploadButton';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(moviesData[0]);

  const updateMovieRating = (title, newRating) => {
    const movieIndex = moviesData.findIndex(movie => movie.title === title);
    moviesData[movieIndex].rating = newRating;
    setSelectedMovie({ ...moviesData[movieIndex] });
  };

  return (
    <div>
      <h1>Movie App</h1>
      <MovieSelector
        movies={moviesData}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
    </div>
  );
};

export default App;