import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const useStyles = withStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Navigation = (props) => {
  const { classes, children } = props;

  return <div className={classes.root}>{children}</div>;
};

Navigation.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  children: PropTypes.shape({}),
};

Navigation.defaultProps = {
  children: null,
};

export default useStyles(Navigation);
