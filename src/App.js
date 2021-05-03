import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';

import Navigation from './Navigation';
import BottomNav from './components/BottomNav';
import DiscoverWrapper from './containers/DiscoverWrapper';
import WatchListWrapper from './containers/WatchListWrapper';

import { useGlobalContext } from './context';

function App() {
  const { menuValue, tvShowsWatchlist, moviesWatchlist, setWatchLists } = useGlobalContext();
  const key = 'movieTraker';

  useEffect(() => {
    let data = localStorage.getItem(key);
    if (!data) {
      const movieTracker = { tvShowsWatchlist, moviesWatchlist };
      localStorage.setItem(key, JSON.stringify(movieTracker));
    } else {
      data = JSON.parse(data);
      setWatchLists(data);
    }
  }, []);

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      localStorage.setItem(key, JSON.stringify({ tvShowsWatchlist, moviesWatchlist }));
    }
  }, [tvShowsWatchlist, moviesWatchlist]);

  return (
    <Box>
      <Navigation>
        <BottomNav />
      </Navigation>
      {menuValue === 0 && <WatchListWrapper watchList={tvShowsWatchlist} type="tv shows" />}
      {menuValue === 1 && <WatchListWrapper watchList={moviesWatchlist} type="movies" />}
      {menuValue === 2 && <DiscoverWrapper />}
    </Box>
  );
}

export default App;
