import { useState } from 'react';
import useMovies from '../common/useMovies';
import Loader from '../common/Loader';
import Pagination from '../common/Pagination';
import MovieContainer from '../common/MovieContainer';

const UpcomingMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useMovies('upcoming', page);

  return (
    <div className='container movie'>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && !error && data && <MovieContainer data={data} />}
      {!isLoading && !error && <Pagination page={page} setPage={setPage} />}
    </div>
  );
};

export default UpcomingMovies;
