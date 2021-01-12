import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Divider, Typography } from '@material-ui/core';

import MovieCard from './MovieCard';
import data from '../data';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  divider: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
  },
  btnRoot: {
    paddingBottom: 0,
    textTransform: 'none',
    fontSize: '0.75rem',
  },
}));

const CategorySection = ({ genre }) => {
  const classes = useStyles();
  const { description } = genre;
  return (
    <section className={classes.root}>
      <Box display="flex" alignItems="flex-end" justifyContent="space-between">
        <Typography component="h2" color="primary">
          {description}
        </Typography>
        <Button classes={{ root: classes.btnRoot }} color="secondary" disableRipple>
          Show more
        </Button>
      </Box>
      <Box display="flex" overflow="auto" marginBottom={1}>
        {data.movies.map((movie) => (
          <MovieCard key={movie.title.title} movie={movie} />
        ))}
      </Box>
      <Divider className={classes.divider} />
    </section>
  );
};

CategorySection.propTypes = {
  genre: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
};

export default CategorySection;
