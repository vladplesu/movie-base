import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import data from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menuValue, setMenuValue] = useState(2);
  const [showGenre, setShowGenre] = useState(false);
  const [allMoviesGenre, setAllMoviesGenre] = useState();
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [tvShowsWatchlist, setTvShowsWatchlist] = useState([]);
  const [moviesWatchlist, setMoviesWatchlist] = useState([]);

  const isInWatchList = (watchList, id) => {
    return watchList.findIndex((movie) => movie.id === id) >= 0;
  };

  const addToWatchList = (newMovie) => {
    if (newMovie.title.titleType.toLowerCase() === 'movie') {
      if (isInWatchList(moviesWatchlist, newMovie.id)) {
        setMoviesWatchlist(moviesWatchlist.filter((movie) => movie.id !== newMovie.id));
      } else {
        setMoviesWatchlist([newMovie, ...moviesWatchlist]);
      }
    }
    if (newMovie.title.titleType.toLowerCase() === 'tvseries') {
      if (isInWatchList(tvShowsWatchlist, newMovie.id)) {
        setTvShowsWatchlist(tvShowsWatchlist.filter((movie) => movie.id !== newMovie.id));
      } else {
        setTvShowsWatchlist([newMovie, ...tvShowsWatchlist]);
      }
    }
  };

  const handleMenuChange = (newValue) => {
    setMenuValue(newValue);
  };

  const handleShowGenreWrapper = (genre) => {
    setShowGenre(true);
    setAllMoviesGenre(genre);
    const newMoviesByGenre = data.movies.filter((movie) =>
      movie.genres
        .map((movieGenre) => movieGenre.toLocaleLowerCase())
        .includes(genre.toLocaleLowerCase())
    );
    setMoviesByGenre(newMoviesByGenre);
    window.scrollTo(0, 0);
  };

  const handleCloseGenreWrapper = () => {
    setShowGenre(false);
  };

  return (
    <AppContext.Provider
      value={{
        menuValue,
        showGenre,
        allMoviesGenre,
        moviesByGenre,
        tvShowsWatchlist,
        moviesWatchlist,
        handleMenuChange,
        isInWatchList,
        addToWatchList,
        handleShowGenreWrapper,
        handleCloseGenreWrapper,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.shape({}),
};

AppProvider.defaultProps = {
  children: <div>HelloWorld</div>,
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
