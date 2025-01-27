/* eslint-disable react/prop-types */
import GenreSelect from './GenreSelect'
import { useState } from 'react';

const MovieRecommendationForm = ({ onSubmit }) => {
  const [genre, setGenre] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(genre, keywords);
  };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="genre">Select Genre:</label>
            <GenreSelect genre={genre} onGenreChange={handleGenreChange} />
              <label htmlFor="keywords">Keywords:</label>
              <input
                  type="text"
                  value={keywords}
                  onChange={handleKeywordChange}
                  placeholder="Enter keywords"
              />
            <button type="submit">Get Recommendations</button>
        </form>
    );
};

export default MovieRecommendationForm;

