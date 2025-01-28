/* eslint-disable react/prop-types */
import StreamingButton from './StreamingButton'
import ReactCardFlip from 'react-card-flip'
import { useState } from 'react';
import { Link } from 'react-router';

const MovieList = ({ movies }) => {
  const [flipped, setFlipped] = useState({});

  const flipCard = (movieId) => {
    setFlipped((cardFlipped) => ({
      ...cardFlipped,
      [movieId]: !cardFlipped[movieId],
    }));
  };

    return (
        <div id='moviePage'>
            {movies.length === 0 && <h1>No Titles Found</h1>}
            {movies.length > 0 &&
            <div>

              <h1>Try Out These Titles:</h1>
              <div id='movieContainer'>
              {movies.map((movie) => (
                <ReactCardFlip key={movie.id} flipDirection='horizontal' isFlipped={flipped[movie.id]}>
                      <div className='card'>
                        <img id="moviePoster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                        <button className="button-48" onClick={() => flipCard(movie.id)}><span className="text">{movie.title}</span></button>
                      </div>
                      <div className = 'card card-back'>
                        <p>{movie.overview}</p>
                        <StreamingButton movieID={movie.id}/>
                        <button id="button-2" onClick={() => flipCard(movie.id)}>See Cover</button>
                      </div>
                </ReactCardFlip>
              ))}
              </div>
            </div>
            }
            <Link className="button-48" to="/" ><span className="text">New Search</span></Link>
        </div>
    );
};

export default MovieList;