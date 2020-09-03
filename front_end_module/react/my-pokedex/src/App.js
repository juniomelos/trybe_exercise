import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './pokedex';


function App() {
  return (
    <div className="App">
    <h1> Pokedex </h1>
    <Pokedex pokemons={data} />
  </div>
  );
}

export default App;
