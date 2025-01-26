/* eslint-disable react/prop-types */
const GenreSelect = ({genre, onGenreChange, genreData}) => {
    return (
        <select value={genre} onChange={onGenreChange}>
            <option value="">Select a genre</option>
            {genreData && genreData.map(genre => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
            ))}
        </select>
    );
};

export default GenreSelect;