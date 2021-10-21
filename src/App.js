import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  //state for movies
  const [movies, setMovies] = useState();
  //fetch movies from api

  useEffect(() => {
    let mount = true;
    const getMovies = async () => {
      const getFetch = await fetch('http://localhost:3001/movies/:1');
      let resJSON = await getFetch.json();
      setMovies(resJSON);
    }
    getMovies();
    //do the unmount thing

  }, [])

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;

// componentDidMount API call
// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch('http://52.26.193.201:3000/products/list');
//     const result = await response.json();
//     setProducts(result);
//   };

//   fetchData();
// }, []);
