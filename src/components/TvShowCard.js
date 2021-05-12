import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  withWidth,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavigateNext as NavigateNextIcon, StarRate } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 150,
    marginBottom: theme.spacing(1.25),
    alignItems: 'stretch',
    position: 'relative',
  },
  cover: {
    flex: '0 0 100px',
  },
  content: {
    padding: theme.spacing(1.25),
    flex: '1 1 100px',
    position: 'relative',
  },
  rating: {
    color: theme.palette.warning.main,
  },
  ratingGreat: {
    color: theme.palette.success.main,
  },
  ratingAverage: {
    color: theme.palette.warning.main,
  },
  ratingLow: {
    color: theme.palette.error.main,
  },
  title: {
    marginRight: theme.spacing(1.25),
  },
  body: {
    display: '-webkit-box',
    fontSize: '0.75rem',
    lineHeight: '1.25',
    marginTop: '0.35rem',
  },
  nav: {
    display: 'flex',
  },
}));

function TvShowCard(props) {
  const { movie, width } = props;
  const { title, ratings, plotOutline, genres } = movie;
  const classes = useStyles();

  let ratingClass;
  if (ratings.rating < 4) {
    ratingClass = classes.ratingLow;
  } else if (ratings.rating < 7) {
    ratingClass = classes.ratingAverage;
  } else {
    ratingClass = classes.ratingGreat;
  }

  let release = `${title.seriesStartYear} - ${title.seriesEndYear}`;
  if (title.titleType === 'movie') {
    release = `${title.year}`;
  }

  return (
    <Card className={classes.root} raised>
      <CardMedia className={classes.cover} image={title.image.url} title={title.title} />
      <CardContent className={classes.content}>
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center" className={classes.rating}>
            <StarRate fontSize="small" />
            <Typography className={ratingClass} variant="caption">
              {ratings.rating}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" alignItems="flex-end">
            <Typography className={classes.title} component="h3" color="secondary">
              {title.title}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {release}
            </Typography>
          </Box>
          <Typography variant="caption" color="textSecondary">
            {genres.join(', ')}
          </Typography>
        </Box>
        <Typography className={classes.body} variant="body2" align="justify">
          {`${plotOutline.text.substring(0, 60)}...`}
        </Typography>
      </CardContent>
      {width !== 'xs' && (
        <div className={classes.nav}>
          <Button aria-label="navigate-next" size="small">
            <NavigateNextIcon />
          </Button>
        </div>
      )}
    </Card>
  );
}

TvShowCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
      seriesEndYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      seriesStartYear: PropTypes.number,
      title: PropTypes.string,
      year: PropTypes.number,
      titleType: PropTypes.string,
    }),
    ratings: PropTypes.shape({
      rating: PropTypes.number,
    }),
    genres: PropTypes.arrayOf(PropTypes.string),
    plotOutline: PropTypes.shape({
      text: PropTypes.string,
    }),
  }),
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

TvShowCard.defaultProps = {
  movie: {
    title: {
      image: {
        url:
          'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
      },
      seriesEndYear: 2020,
      seriesStartYear: 2019,
      title: 'MovieName',
    },
    ratings: {
      rating: 10,
    },
    genres: ['genre1', 'genre2', 'genre3'],
    plotOutline: {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
};

export default withWidth()(TvShowCard);
