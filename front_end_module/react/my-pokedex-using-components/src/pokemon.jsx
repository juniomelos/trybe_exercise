import React from 'react';
import './App.css';

class Pokemon extends React.Component{
  render(){

    const {name, type, averageWeight, image} = this.props.pokemon;
    return(
      <div className="pokemon">
        <div>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={image} alt="pokemon" />
        </div>
      </div>
    )
  }
}

export default Pokemon;