import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const MovieList = ({ movies }) => {


  return (
    <>
      {movies.map(movie => (
        <>
          <h1> {movie.title}</h1>
          <img src={movie.poster} alt={movie.title} />
        </>
      ))}
    </>

  )
}





export default MovieList;