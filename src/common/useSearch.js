import { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../context/movieContext';

const useSearch = () => {
  const { isSearchActive, searchedInput } = useContext(MovieContext);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      if (isSearchActive) {
        const request = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchedInput}&page=1&api_key=886bf626519df94bd74212d0425d47f7`
        );
        const response = await request.json();
        if (request.status === 200) {
          setData(response);
        } else {
          setError(response.status_message);
        }
      }
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData();
    }, 1500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchedInput]);

  return { data, isLoading, error };
};

export default useSearch;
