import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return <li>{value}</li>;
};

const toDoList = ['study', 'sleep', 'study', 'anime', 'study', 'drink', 'eat'];

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{toDoList.map((element) => task(element))}</p>
      </header>
    </div>
  );
}

export default App;
