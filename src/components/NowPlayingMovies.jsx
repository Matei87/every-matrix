import { useState } from 'react';
import useMovies from '../common/useMovies';
import Loader from '../common/Loader';
import Pagination from '../common/Pagination';
import MovieContainer from '../common/MovieContainer';

const NowPlayingMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useMovies('now_playing', page);

  return (
    <div className='container movie'>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && !error && data && <MovieContainer data={data} />}
      {!isLoading && !error && <Pagination page={page} setPage={setPage} />}
    </div>
  );
};

export default NowPlayingMovies;
