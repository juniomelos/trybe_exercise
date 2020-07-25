import React from 'react';
import Cars from './Cars';
import './App.css';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import MyContextCars from './MyContext';
import TrafficSignal from './TrafficSignal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
      signal: { color: 'red' },
    };
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
    this.renderSignal = this.renderSignal.bind(this);
  }

  changeSignal = (color) => {
    console.log(color)
    this.setState({
      ...this.state,
      signal: { color },
    });
  };

  renderSignal = (signalColor) => {
    if (signalColor === 'red') {
      return redSignal;
    }
    if (signalColor === 'green') {
      return greenSignal;
    }
    if (signalColor === 'yellow') {
      return yellowSignal;
    }
    return null;
  };

  moveCar = (car, side) => {
    this.setState({
      ...this.state,
      [car]: side,
    });
  };

  render() {
    const contextValue = {
      ...this.state,
      moveCar: (car, side) => this.moveCar(car, side),
      changeSignal: (color) => this.changeSignal(color),
      renderSignal: (signalColor) => this.renderSignal(signalColor),
    };

    return (
      <MyContextCars.Provider value={contextValue}>
        <TrafficSignal />
        <Cars />
      </MyContextCars.Provider>
    );
  }
}

export default App;
