import { useState } from 'react'
import './App.css'
import fetchMovies from './services/tmdb-api.jsx';
import MovieRecommendationForm from './MovieRecommendationForm.jsx';
import MovieList from './MovieList.jsx';
// import { BrowserRouter } from 'react-router';

function App() {
  const [movies, setMovies] = useState([]);
  const search = async (genre, keywords) => {
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
    {/* <BrowserRouter> */}
      <div className="App">
            <h1>Welcome To Flick Finder!</h1>
          <MovieRecommendationForm onSubmit={search} />
          <MovieList movies={movies}/>
        </div>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App
