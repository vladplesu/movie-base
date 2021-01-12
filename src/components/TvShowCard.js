import React from 'react';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';

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
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0.75),
    minWidth: '30px',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'stretch',
    fontSize: '1rem',
    alignSelf: 'flex-start',
    marginTop: theme.spacing(-1.25),
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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.25rem',
    marginRight: theme.spacing(1.25),
  },
  body: {
    display: '-webkit-box',
    lineHeight: '1.25',
    marginTop: '0.35rem',
  },
  nav: {
    display: 'flex',
  },
}));

function TvShowCard(props) {
  const { movie, width } = props;
  const { title, ratings, plotOutline } = movie;
  const classes = useStyles();

  let ratingClass;
  if (ratings.rating < 4) {
    ratingClass = classes.ratingLow;
  } else if (ratings.rating < 7) {
    ratingClass = classes.ratingAverage;
  } else {
    ratingClass = classes.ratingGreat;
  }

  return (
    <Card className={classes.root} raised>
      <CardMedia className={classes.cover} image={title.image.url} title={title.title} />
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <div>
            <Typography className={classes.title} component="h5" variant="h5" color="primary">
              {title.title}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
            >{`(${title.seriesStartYear} - ${title.seriesEndYear})`}</Typography>
          </div>
          <div className={classes.rating}>
            <Typography className={ratingClass} variant="caption">
              {ratings.rating}
            </Typography>
          </div>
        </div>
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
