import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';

import SimpleCard from '../components/SimpleCard';
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

const WatchListWrapper = ({ watchList, type }) => {
  const classes = useStyles();

  if (watchList.length === 0) {
    return <WatchListEmpty message={`Add ${type} you have watched.`} />;
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.header} display="flex" justifyContent="center" boxShadow={2}>
        <Typography color="primary">Watchlist</Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        {watchList.map((movie) => (
          <Box mt={1} mb={1}>
            <SimpleCard key={movie.title.title} movie={movie} />
          </Box>
        ))}
        <Button variant="outlined" color="primary">
          <Box
            display="flex"
            height="160px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <AddBox color="primary" fontSize="large" />
            <Typography>Add more</Typography>
          </Box>
        </Button>
      </Box>
    </Container>
  );
};

WatchListWrapper.propTypes = {
  watchList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  type: PropTypes.string.isRequired,
};

export default WatchListWrapper;
