import React from 'react';

const MovieList = ({ movies }) => {
  console.log('movies from mov', movies)

  return (
    <>
      {movies.map(movie => (
        <h1> {movie.title}</h1>
      ))}
    </>

  )
}





export default MovieList;