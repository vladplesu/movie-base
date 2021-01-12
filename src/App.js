import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Navigation from './Navigation';
import BottomNav from './BottomNav';
import CategorySection from './components/CategorySection';
import TvShowCard from './components/TvShowCard';
import SearchBar from './components/SearchBar';

import { useGlobalContext } from './context';

import data from './data';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(8),
  },
}));

function App() {
  const classes = useStyles();
  const { menuValue } = useGlobalContext();

  return (
    <Box>
      <Navigation>
        <BottomNav />
      </Navigation>
      {menuValue === 0 && (
        <Container className={classes.container}>
          {data.movies.map((movie) => (
            <TvShowCard key={movie.title.title} movie={movie} />
          ))}
        </Container>
      )}
      {menuValue === 2 && (
        <Container className={classes.container}>
          <SearchBar />
          {data.genres.map((genre) => (
            <CategorySection key={genre.description} genre={genre} />
          ))}
        </Container>
      )}
    </Box>
  );
}

export default App;
