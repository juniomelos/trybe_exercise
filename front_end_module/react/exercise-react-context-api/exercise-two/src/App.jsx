import React from 'react';
import Cars from './Cars';
import './App.css';
import MyContextCars from './MyContextCars';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar = (car, side) => {
    this.setState({
      ...this.state,
      [car]: side,
    });
  };

  render() {
    const contextValue = {
      ...this.state,
      moveCar: (car, side) => this.moveCar(car, side)
    };

    return (
      <MyContextCars.Provider value={contextValue}>
        <Cars />
      </MyContextCars.Provider>
    );
  }
}

export default App;
