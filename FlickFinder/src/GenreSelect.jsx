/* eslint-disable react/prop-types */
import GenreList from './GenreList.jsx';
import { useState } from 'react';

const GenreSelect = ({onGenreChange}) => {
// const [opened, setOpened] = useState(false);
  
//     return (
//       <div className="selectContainer">
//         <select id="selectGenre" className="selectBody" onChange={onGenreChange}>
//             <option value="">Select a genre</option>
//             {GenreList && GenreList.map(genre => (
//                 <option key={genre.id} value={genre.id}>
//                     {genre.name}
//                 </option>
//             ))}
//         </select>
//         <div className="selectIcon">

//         </div>
//       </div>
//     );
// };
const [selectedgenre, setSelectedgenre] = useState(null);
const [isOpen, setIsOpen] = useState(false);

const handleSelect = (genre) => {
  setSelectedgenre(genre);
//   onGenreChange(genre);
  setIsOpen(false);
  console.log(isOpen);
};



return (
  <div className="dropdown-container">
    <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
      <span>{selectedgenre ? selectedgenre.name : 'Select a genre'}</span>
      <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
    </div>
    {isOpen && (
      <div className="dropdown-list">
        {GenreList.map((genre) => (
          <div
            key={genre.id}
            value={genre.id}
            onChange={onGenreChange}
            className={`dropdown-item ${selectedgenre && selectedgenre.id === genre.id ? 'selected' : ''}`}
            onClick={() => handleSelect(genre)}
          >
            <span>{genre.name}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);
};


export default GenreSelect;
