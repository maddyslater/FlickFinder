import { useState } from 'react'
import './App.css'
import fetchMovies from './services/tmdb-api.jsx';
import MovieRecommendationForm from './MovieRecommendationForm.jsx';
import MovieList from './MovieList.jsx';
import { Routes, Route } from 'react-router';
import { useNavigate } from 'react-router';

function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const search = async (genre, keywords) => {
      try {
        const results = await fetchMovies(genre, keywords);
        setMovies(results);
        navigate('/movieList');
      }
      catch(error) {
        console.log(`Submit error: ${error}`)
      }
  };

  return (
    <>
    {/* <BrowserRouter> */}
      <div className="App">
        <Routes>
          <Route element={<MovieRecommendationForm onSubmit={search} />} path="/" />
          <Route element={<MovieList movies={movies}/>} path="/movieList" />
        </Routes>
        </div>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App
