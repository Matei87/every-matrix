import { useContext } from 'react';
import { MovieContext } from '../context/movieContext';

const MovieContainer = ({ data }) => {
  const { favoriteMovies, setFavoriteMovies } = useContext(MovieContext);

  const addToFavorite = ({ id, backdrop_path, title, release_date }) => {
    setFavoriteMovies([
      ...favoriteMovies,
      {
        id,
        backdrop_path,
        title,
        release_date,
      },
    ]);
  };

  return (
    <>
      {data.results.map(({ id, backdrop_path, title, release_date }) => (
        <div className='card' key={id}>
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt='alt'
          />
          <div className='content'>
            <p>{title}</p>
            <p>Release Date: {release_date}</p>
            <span
              className={
                favoriteMovies.find((movie) => movie.id === id)
                  ? 'favorite active'
                  : 'favorite'
              }
              onClick={() =>
                addToFavorite({
                  id,
                  backdrop_path,
                  title,
                  release_date,
                })
              }
            >
              Add
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieContainer;
