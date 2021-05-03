import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardMedia, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CheckIcon from '@material-ui/icons/Check';

import { useGlobalContext } from '../context';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    flex: '0 0 130px',
    position: 'relative',
    marginRight: theme.spacing(1),
  },
  cover: {
    height: '180px',
  },
  iconBtnRoot: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  addIconRoot: {
    color: theme.palette.text.secondary,
  },
  checkIconRoot: {
    color: theme.palette.primary.main,
  },
  bookmarkIcon: {
    color: theme.palette.background.paper,
    fontSize: '2.8rem',
    position: 'absolute',
    right: 0,
    top: 0,
  },
}));

const SimpleCard = ({ movie }) => {
  const { title } = movie;
  const classes = useStyles();
  const { isInWatchList, tvShowsWatchlist, moviesWatchlist, addToWatchList } = useGlobalContext();
  const isMovieAdded =
    title.titleType.toLowerCase() === 'movie'
      ? isInWatchList(moviesWatchlist, movie.id)
      : isInWatchList(tvShowsWatchlist, movie.id);

  return (
    <Card classes={{ root: classes.cardRoot }} component="article" raised>
      <CardMedia className={classes.cover} image={title.image.url} title={title.title} />
      <IconButton
        classes={{ root: classes.iconBtnRoot }}
        size="small"
        onClick={() => addToWatchList(movie)}
      >
        {isMovieAdded ? (
          <CheckIcon classes={{ root: classes.checkIconRoot }} />
        ) : (
          <AddIcon classes={{ root: classes.addIconRoot }} />
        )}
      </IconButton>
      <BookmarkIcon classes={{ root: classes.bookmarkIcon }} viewBox="0 6 18 20" />
    </Card>
  );
};

SimpleCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
      title: PropTypes.string,
      titleType: PropTypes.string,
    }),
  }).isRequired,
};

export default SimpleCard;
