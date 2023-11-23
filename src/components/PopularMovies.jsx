import { useState } from 'react';
import useMovies from '../common/useMovies';
import Loader from '../common/Loader';
import Pagination from '../common/Pagination';
import MovieContainer from '../common/MovieContainer';

const PopularMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useMovies('popular', page);

  return (
    <div className='container movie'>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && !error && data && <MovieContainer data={data} />}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default PopularMovies;
