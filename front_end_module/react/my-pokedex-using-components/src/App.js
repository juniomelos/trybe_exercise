import React from 'react';
import data from './data';
import Pokedex from './pokedex';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0,
      actual: data,
    };
  }

  nextPokemon = () => {
    this.setState({ item: this.state.item + 1 });
    if (this.state.item === this.state.actual.length - 1) {
      this.setState({ item: 0 });
    }
  };

  filterPokemon = type => {
    this.setState({
      actual:
        type === 'All' ? data : data.filter(pokemon => pokemon.type === type),
    });
    this.setState({ item: 0 });
  };

  render() {
    return (
      <div className='card-parent'>
        <Pokedex
          pokedex={this.state.actual}
          next={this.nextPokemon}
          filter={this.filterPokemon}
          item={this.state.item}
        />
      </div>
    );
  }
}

export default App;
