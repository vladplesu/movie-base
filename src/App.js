import React from 'react';
import Box from '@material-ui/core/Box';

import Navigation from './Navigation';
import BottomNav from './components/BottomNav';
import DiscoverWrapper from './containers/DiscoverWrapper';
import TvShowsWrapper from './containers/TvShowsWrapper';
import MoviesWrapper from './containers/MoviesWrapper';

import { useGlobalContext } from './context';

function App() {
  const { menuValue } = useGlobalContext();

  return (
    <Box>
      <Navigation>
        <BottomNav />
      </Navigation>
      {menuValue === 0 && <TvShowsWrapper />}
      {menuValue === 1 && <MoviesWrapper />}
      {menuValue === 2 && <DiscoverWrapper />}
    </Box>
  );
}

export default App;
