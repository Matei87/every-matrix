import { useState, useEffect } from 'react';

const useMovies = (type, page) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const request = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}&api_key=886bf626519df94bd74212d0425d47f7`
      );
      const response = await request.json();
      if (request.status === 200) {
        setData(response);
      } else {
        setError(response.status_message);
      }
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [type, page]);
  return { data, isLoading, error };
};

export default useMovies;
