import useSearch from '../common/useSearch';
import MovieContainer from '../common/MovieContainer';

const SearchContent = () => {
  const { data, isLoading, error } = useSearch();

  return (
    <>
      {data && data.results.length === 0 && <h3>No Movies Found !</h3>}
      <div className='container search'>
        {!isLoading && !error && data && <MovieContainer data={data} />}
      </div>
    </>
  );
};

export default SearchContent;
