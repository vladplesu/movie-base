import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menuValue, setMenuValue] = useState(2);
  const [watchList, setWatchList] = useState([]);

  const isInWatchList = (id) => {
    return watchList.findIndex((movie) => movie.id === id) >= 0;
  };

  const addToWatchList = (newMovie) => {
    if (isInWatchList(newMovie.id)) {
      setWatchList(watchList.filter((movie) => movie.id !== newMovie.id));
    } else {
      setWatchList([...watchList, newMovie]);
    }
  };

  const handleMenuChange = (newValue) => {
    setMenuValue(newValue);
  };

  return (
    <AppContext.Provider
      value={{ menuValue, watchList, handleMenuChange, isInWatchList, addToWatchList }}
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
