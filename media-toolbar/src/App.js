import React, { useState } from 'react';
import Movies, { moviesData } from './components/Movies';
import MovieSelector from './components/MovieSelector';
import RateMovieButton from './components/RateMovieButton.js';
import UploadButton from './components/UploadButton';
import './App.css';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(moviesData[0]);

  const updateMovieRating = (title, newRating) => {
    const movieIndex = moviesData.findIndex(movie => movie.title === title);
    moviesData[movieIndex].rating = newRating;
    setSelectedMovie({ ...moviesData[movieIndex] });
  };

  return (
    <div>
      <RateMovieButton
        selectedMovie={selectedMovie}
        updateMovieRating={updateMovieRating}
      />
      <h1>Movie App</h1>
      <MovieSelector
        movies={moviesData}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
      <UploadButton />
    </div>
  );
};

export default App;