/* eslint-disable react/prop-types */


const movieList = ({ movies}) => {

    return (
        <div>
            {movies.length === 0 && <p>Try Different Key Words & Genres!</p>}
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                </div>
            ))}
        </div>
    );
};

export default movieList;