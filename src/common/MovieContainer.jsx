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

  const handleFilterFavoriteMovies = (id) => {
    const filteredFavoriteMovies = favoriteMovies.filter(
      (movie) => movie.id !== id
    );
    setFavoriteMovies(filteredFavoriteMovies);
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

            {!favoriteMovies.find((movie) => movie.id === id) ? (
              <span
                className='favorite'
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
            ) : (
              <span
                className='favorite'
                onClick={() => handleFilterFavoriteMovies(id)}
              >
                Remove
              </span>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieContainer;
