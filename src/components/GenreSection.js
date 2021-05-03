import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Divider, Typography } from '@material-ui/core';

import SimpleCard from './SimpleCard';
import data from '../data';
import { useGlobalContext } from '../context';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1.5),
    textTransform: 'capitalize',
  },
  divider: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
  },
  btnRoot: {
    fontSize: '0.75rem',
    paddingBottom: 0,
    paddingRight: 0,
  },
}));

const GenreSection = ({ genre }) => {
  const classes = useStyles();
  const { handleShowGenreWrapper } = useGlobalContext();
  const { description } = genre;
  const filteredMovies = data.movies.filter((movie) =>
    movie.genres.map((movieGenre) => movieGenre.toLowerCase()).includes(description.toLowerCase())
  );
  return (
    <section className={classes.root}>
      <Box display="flex" alignItems="flex-end" justifyContent="space-between">
        <Typography component="h2" color="secondary" variant="button">
          {description}
        </Typography>
        <Button
          classes={{ root: classes.btnRoot }}
          color="primary"
          disableRipple
          onClick={() => handleShowGenreWrapper(description)}
        >
          Show more
        </Button>
      </Box>
      <Box display="flex" overflow="auto" mb={1}>
        {filteredMovies.map((movie) => (
          <SimpleCard key={movie.title.title} movie={movie} />
        ))}
      </Box>
      <Divider classes={{ root: classes.divider }} />
    </section>
  );
};

GenreSection.propTypes = {
  genre: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
};

export default GenreSection;
