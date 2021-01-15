import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Navigation from './Navigation';
import BottomNav from './components/BottomNav';
import DiscoverWrapper from './containers/DiscoverWrapper';
import TvShowCard from './components/TvShowCard';

import { useGlobalContext } from './context';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(8),
  },
}));

function App() {
  const classes = useStyles();
  const { menuValue, tvShowsWatchlist, moviesWatchlist } = useGlobalContext();

  return (
    <Box>
      <Navigation>
        <BottomNav />
      </Navigation>
      {menuValue === 0 && (
        <Container className={classes.container}>
          {tvShowsWatchlist.map((movie) => (
            <TvShowCard key={movie.title.title} movie={movie} />
          ))}
        </Container>
      )}
      {menuValue === 1 && (
        <Container className={classes.container}>
          {moviesWatchlist.map((movie) => (
            <TvShowCard key={movie.title.title} movie={movie} />
          ))}
        </Container>
      )}
      {menuValue === 2 && <DiscoverWrapper />}
    </Box>
  );
}

export default App;
