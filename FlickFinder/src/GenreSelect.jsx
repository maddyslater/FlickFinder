/* eslint-disable react/prop-types */
import GenreList from './GenreList.jsx';

const GenreSelect = ({genre, onGenreChange}) => {

  
    return (
        <select value={genre} onChange={onGenreChange}>
            <option value="">Select a genre</option>
            {GenreList && GenreList.map(genre => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
            ))}
        </select>
    );
};

export default GenreSelect;