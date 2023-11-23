import { useContext, useState } from 'react';
import { MovieContext } from './context/movieContext';
import SearchBar from './components/SearchBar';
import SearchContent from './components/SearchContent';
import PopularMovies from './components/PopularMovies';
import NowPlayingMovies from './components/NowPlayingMovies';
import TopRatedMovies from './components/TopRatedMovies';
import UpcomingMovies from './components/UpcomingMovies';
import FavoriteMovies from './components/FavoriteMovies';
import Footer from './components/Footer';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { favoriteMovies, isSearchActive } = useContext(MovieContext);

  return (
    <>
      <SearchBar />

      {isSearchActive && <SearchContent />}

      <div className='tabs'>
        <ul className='tabs-ul'>
          <li
            className={activeTab === 1 ? 'tabs-li active' : 'tabs-li'}
            onClick={() => setActiveTab(1)}
          >
            Popular
          </li>
          <li
            className={activeTab === 2 ? 'tabs-li active' : 'tabs-li'}
            onClick={() => setActiveTab(2)}
          >
            Now Playing
          </li>
          <li
            className={activeTab === 3 ? 'tabs-li active' : 'tabs-li'}
            onClick={() => setActiveTab(3)}
          >
            Top Rated
          </li>
          <li
            className={activeTab === 4 ? 'tabs-li active' : 'tabs-li'}
            onClick={() => setActiveTab(4)}
          >
            Upcoming
          </li>
          <li
            className={activeTab === 5 ? 'tabs-li active' : 'tabs-li'}
            onClick={() => setActiveTab(5)}
          >
            Favorite Movies
            <p className='tooltip'>
              {favoriteMovies.length > 0 && favoriteMovies.length}
            </p>
          </li>
        </ul>
        <div className='content'>
          {activeTab === 1 && (
            <div className='tab'>
              <PopularMovies />
            </div>
          )}
          {activeTab === 2 && (
            <div className='tab'>
              <NowPlayingMovies />
            </div>
          )}
          {activeTab === 3 && (
            <div className='tab'>
              <TopRatedMovies />
            </div>
          )}
          {activeTab === 4 && (
            <div className='tab'>
              <UpcomingMovies />
            </div>
          )}

          {activeTab === 5 && (
            <div className='tab'>
              <FavoriteMovies />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
