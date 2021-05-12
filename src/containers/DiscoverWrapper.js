import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, IconButton, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

import GenreSection from '../components/GenreSection';
import GenreWrapper from './GenreWrapper';
import SearchBar from '../components/SearchBar';

import data from '../data';
import { useGlobalContext } from '../context';

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
    position: 'relative',
  },
  iconBtnRoot: {
    padding: 0,
    border: `1px solid ${theme.palette.divider}`,
    height: '32px',
    width: '32px',
    position: 'absolute',
    left: theme.spacing(2),
  },
}));

const DiscoverWrapper = () => {
  const classes = useStyles();
  const { showGenre, allMoviesGenre, handleCloseGenreWrapper } = useGlobalContext();

  return (
    <Container className={classes.container}>
      {showGenre && (
        <Box className={classes.header} display="flex" justifyContent="center" py={2}>
          <IconButton
            classes={{ root: classes.iconBtnRoot }}
            color="primary"
            onClick={handleCloseGenreWrapper}
          >
            <ChevronLeft />
          </IconButton>
          <Typography variant="h6" component="h2" color="secondary">
            {allMoviesGenre}
          </Typography>
        </Box>
      )}
      <SearchBar />
      {!showGenre &&
        data.genres.map((genre) => <GenreSection key={genre.description} genre={genre} />)}
      {showGenre && <GenreWrapper />}
    </Container>
  );
};

export default DiscoverWrapper;
