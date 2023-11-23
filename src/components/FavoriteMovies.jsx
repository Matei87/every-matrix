import { useContext } from 'react';
import { MovieContext } from '../context/movieContext';

const FavoriteMovies = () => {
  const { favoriteMovies, setFavoriteMovies } = useContext(MovieContext);

  const handleFilterFavoriteMovies = (id) => {
    const filteredFavoriteMovies = favoriteMovies.filter(
      (movie) => movie.id !== id
    );
    setFavoriteMovies(filteredFavoriteMovies);
  };

  return (
    <>
      {favoriteMovies.length === 0 && <p>No Favorite Movies !</p>}
      <div className='container favorite'>
        {favoriteMovies &&
          favoriteMovies.map(({ id, backdrop_path, title, release_date }) => (
            <div className='card' key={id}>
              <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt='alt'
              />
              <div className='content'>
                <p>{title}</p>
                <p>Release Date: {release_date}</p>
                <span
                  className='favorite'
                  onClick={() => handleFilterFavoriteMovies(id)}
                >
                  Remove
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FavoriteMovies;
