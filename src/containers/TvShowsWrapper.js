import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import TvShowCard from '../components/TvShowCard';
import WatchListEmpty from '../components/WatchListEmpty';

import { useGlobalContext } from '../context';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(8),
  },
}));

const TvShowsWrapper = () => {
  const classes = useStyles();
  const { tvShowsWatchlist } = useGlobalContext();

  if (tvShowsWatchlist.length === 0) {
    return <WatchListEmpty message="Add tv shows you want to watch." />;
  }

  return (
    <Container className={classes.container}>
      {tvShowsWatchlist.map((movie) => (
        <TvShowCard key={movie.title.title} movie={movie} />
      ))}
    </Container>
  );
};

export default TvShowsWrapper;
