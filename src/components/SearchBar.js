import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: fade(theme.palette.secondary.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, 0.25),
    },
    borderRadius: theme.spacing(4),
    border: `1px solid ${theme.palette.secondary.main}`,
    display: 'flex',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.searchIcon}>
        <SearchIcon color="secondary" />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchBar;
