import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';

import TvShowCard from '../components/TvShowCard';
import WatchListEmpty from '../components/WatchListEmpty';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(8),
  },
  header: {
    background: theme.palette.background.paper,
    textTransform: 'capitalize',
    marginTop: theme.spacing(-1),
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
}));

const WatchListWrapper = ({ whatchList, type }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.header} display="flex" justifyContent="center" boxShadow={2}>
        <Typography color="primary">{type}</Typography>
      </Box>
      {whatchList.length === 0 ? (
        <WatchListEmpty message={`Add ${type} you want to watch.`} />
      ) : (
        <Box marginTop={1}>
          {whatchList.map((movie) => (
            <TvShowCard key={movie.title.title} movie={movie} />
          ))}
        </Box>
      )}
    </Container>
  );
};

WatchListWrapper.propTypes = {
  whatchList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  type: PropTypes.string.isRequired,
};

export default WatchListWrapper;
