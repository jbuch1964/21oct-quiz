import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';

function App() {

  //state for movies
  const [movies, setMovies] = useState([]);

  //fetch movies from api
  useEffect(() => {
    let mount = true;
    const getMovies = async () => {
      const getFetch = await fetch('http://localhost:3001/movies/');
      let resJson = await getFetch.json();
      if (mount) {
        setMovies(resJson);
      }
    }
    getMovies();
    // console.log('movies from app', movies)

    return (() => { mount = false })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <MovieList movies={movies} />
      </header>
    </div>
  );
}

export default App;