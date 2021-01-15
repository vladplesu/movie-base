import React from 'react';

import TvShowCard from '../components/TvShowCard';
import { useGlobalContext } from '../context';

const CategoryWrapper = () => {
  const { moviesByGenre } = useGlobalContext();
  return (
    <>
      {moviesByGenre.map((movie) => (
        <TvShowCard key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default CategoryWrapper;
