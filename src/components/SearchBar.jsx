import { useContext } from 'react';
import { MovieContext } from '../context/movieContext';

const SearchBar = () => {
  const { searchedInput, setIsSearchActive, setSearchedInput } =
    useContext(MovieContext);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setSearchedInput(e.target.value);
      setIsSearchActive(true);
    }
    if (e.target.value.length === 0) {
      setSearchedInput('');
      setIsSearchActive(false);
    }
  };

  return (
    <div className='searchBar'>
      <div className='wrapper'>
        <input
          type='text'
          value={searchedInput}
          placeholder='Search movie'
          onChange={handleChange}
        />
        <button
          type='reset'
          onClick={() => {
            setSearchedInput('');
            setIsSearchActive(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
