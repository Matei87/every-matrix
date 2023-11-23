import { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext(null);

export const MovieContextProvider = (props) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchedInput, setSearchedInput] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const favoriteMovies = localStorage.getItem('favoriteMovies');
    return favoriteMovies ? JSON.parse(favoriteMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return (
    <MovieContext.Provider
      value={{
        favoriteMovies,
        setFavoriteMovies,
        isSearchActive,
        setIsSearchActive,
        searchedInput,
        setSearchedInput,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
