import React from 'react';
import Pokemon from './pokemon';
import ButtonNext from './buttonNext';
import ButtonFilter from './buttonFilter';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <Pokemon pokemon={this.props.pokedex[this.props.item]} />
        <ButtonNext next={this.props.next} />
        <ButtonFilter filter={this.props.filter} />
      </div>
    );
  }
}

export default Pokedex;
