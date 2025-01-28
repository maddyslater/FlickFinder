/* eslint-disable react/prop-types */
import GenreSelect from './GenreSelect'
import { useState } from 'react';
// import { useNavigate, Link } from 'react-router';

const MovieRecommendationForm = ({ onSubmit }) => {
  const [genre, setGenre] = useState('');
  const [keywords, setKeywords] = useState('');
//   const navigate = useNavigate();

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(genre, keywords);
    // navigate('/movieList');
  };
    return (
        <div id="movieRecForm">
            <h1 className="logo" >Flick Finder</h1>
            <h2 className="subtitle">A search engine for those who simply cannot choose</h2>
            <form id="searchBar" onSubmit={handleSubmit}>
                {/* <label>Genre:</label> */}
                <GenreSelect onGenreChange={handleGenreChange} />
                {/* <label>Keywords:</label> */}
                <input
                    className="searchInput"
                    type="text"
                    value={keywords}
                    onChange={handleKeywordChange}
                    placeholder="Enter keywords"
                />
                <button className="button-48" id="searchButton" type="submit"><span className="text">Search</span></button>
                {/* <Link to="/movieList" className="submit-button" onClick={() => handleSubmit }>Get Recommendations</Link> */}
            </form>
        </div>
    );
};

export default MovieRecommendationForm;

