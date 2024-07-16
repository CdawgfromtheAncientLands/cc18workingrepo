import React, { useState } from 'react';

const RateMovieButton = ({ selectedMovie, updateMovieRating }) => {
  const [rating, setRating] = useState(selectedMovie.rating);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to submit this rating?")) {
      updateMovieRating(selectedMovie.title, parseFloat(rating));
    }
  };

  return (
    <div>
      <h3>Rate {selectedMovie.title}</h3>
      <input
        type="range"
        min="1"
        max="5"
        step="0.5"
        value={rating}
        onChange={handleRatingChange}
      />
      <p>{rating} stars</p>
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

export default RateMovieButton;