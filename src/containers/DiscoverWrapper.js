import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    position: 'relative',
  },
  iconBtnRoot: {
    padding: 0,
    position: 'absolute',
    left: theme.spacing(1),
  },
}));

const DiscoverWrapper = () => {
  const classes = useStyles();
  const { showGenre, handleCloseGenreWrapper } = useGlobalContext();

  return (
    <Container className={classes.container}>
      {showGenre && (
        <Box className={classes.header} display="flex" justifyContent="center">
          <IconButton
            classes={{ root: classes.iconBtnRoot }}
            color="primary"
            onClick={handleCloseGenreWrapper}
          >
            <ArrowBackIosIcon />
          </IconButton>
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
