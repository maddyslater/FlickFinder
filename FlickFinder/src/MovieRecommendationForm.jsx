/* eslint-disable react/prop-types */
import GenreSelect from './GenreSelect'

const MovieRecommendationForm = ({
    onSubmit,
    genre,
    keywords,
    onGenreChange,
    onKeywordChange,
    genreList
    }) => {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="genre">Select Genre:</label>
            <GenreSelect genre={genre} onGenreChange={onGenreChange} genreData={genreList} />
              <label htmlFor="keywords">Keywords:</label>
              <input
                  type="text"
                  value={keywords}
                  onChange={onKeywordChange}
                  placeholder="Enter keywords"
              />
            <button type="submit">Get Recommendations</button>
        </form>
    );
};

export default MovieRecommendationForm;

