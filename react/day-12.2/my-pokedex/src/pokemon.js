import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemon'>
                  <img src={image} alt={'pokemon'}></img>

        <div className='text'>

          <p>
            <strong>{name}</strong>
          </p>
          <p>{type}</p>
          <p>
            {averageWeight.value}
            {averageWeight.measurementUnit}
          </p>
        </div>
      </div>
    );
  }
}

export default Pokemon;
