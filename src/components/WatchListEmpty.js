import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@material-ui/core';

import { useGlobalContext } from '../context';

const WatchListEmpty = ({ message }) => {
  const { handleMenuChange } = useGlobalContext();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="100vh"
    >
      <Typography variant="body1">Your watch list is empty!</Typography>
      <Typography variant="caption" color="textSecondary" gutterBottom>
        {message}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleMenuChange(2)}>
        Browse
      </Button>
    </Box>
  );
};

WatchListEmpty.propTypes = {
  message: PropTypes.string.isRequired,
};

export default WatchListEmpty;
