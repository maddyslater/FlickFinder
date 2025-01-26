import axios from 'axios'

const apiKey = '468453b45860c52d24a9213a500e314b';

function formatKeywords(keywords) {
  return keywords
    .split(",")
    .join('|');
}

const fetchMovies = async (genre, keywords) => {

  const genreVal = genre;
  const keywordsStr = formatKeywords(keywords);
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreVal}`;

  if (keywords) {
    url += `&query=${keywordsStr}`;
  }

  try {
    //returns an array of movies
    const response = await axios.get(url);
    const movies = response.data.results;
    movies.forEach((movie) => {
      console.log(`Title: ${movie.title}, Release Date: ${movie.release_date}`);
    });
    return response.data.results;
  }
  catch (error) {
    console.log(`TMDB error: ${error}`);
    throw error;
  }
    
};

export default fetchMovies;