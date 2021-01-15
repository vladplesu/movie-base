import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';

import { useGlobalContext } from '../context';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0px -2px 6px rgba(0, 0, 0, 0.4)',
  },
}));

const BottomNav = () => {
  const classes = useStyles();
  const { menuValue, handleMenuChange } = useGlobalContext();

  return (
    <BottomNavigation
      showLabels
      className={classes.root}
      value={menuValue}
      onChange={(event, newValue) => handleMenuChange(newValue)}
    >
      <BottomNavigationAction label="Shows" icon={<TvOutlinedIcon />} />
      <BottomNavigationAction label="Movies" icon={<TheatersOutlinedIcon />} />
      <BottomNavigationAction label="Discover" icon={<SearchOutlinedIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
