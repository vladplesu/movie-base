import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
    },
    borderRadius: theme.spacing(4),
    border: `1px solid ${theme.palette.divider}`,
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
    '&::placeholder': {
      color: theme.palette.primary.main,
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.searchIcon}>
        <SearchIcon color="primary" />
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
