import { useState } from 'react'
import './App.css'
import fetchMovies from './services/tmdb-api.jsx';
// import GenreSelect from './GenreSelect.jsx';
import MovieRecommendationForm from './MovieRecommendationForm.jsx';
import MovieList from './MovieList.jsx';
import GenreList from './GenreList.jsx';

function App() {
  const [genre, setGenre] = useState('');
  const [keywords, setKeywords] = useState('');
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);

  const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

  const handleKeywordChange = (event) => {
      setKeywords(event.target.value);
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const results = await fetchMovies(genre, keywords);
        setMovies(results);

      }
      catch(error) {
        console.log(`Submit error: ${error}`)
      }
  };



  return (
    <>
      <div className="App">
            <h1>Welcome To Flick Finder!</h1>
          <MovieRecommendationForm
                onSubmit={handleSubmit}
                genre={genre}
                keywords={keywords}
                onGenreChange={handleGenreChange}
                onKeywordChange={handleKeywordChange}
                genreList={GenreList}
          />
          <MovieList movies={movies}/>
          {/* <form onSubmit={handleSubmit}>
            <label htmlFor="genre">Select Genre:</label>
            <GenreSelect genre={genre} onGenreChange={handleGenreChange} genreData={genreList} />
              <label htmlFor="keywords">Keywords:</label>
              <input
                  type="text"
                  value={keywords}
                  onChange={handleKeywordChange}
                  placeholder="Enter keywords"
              />
            <button type="submit">Get Recommendations</button>
        </form> */}
        </div>

        
    </>
  )
}

export default App
