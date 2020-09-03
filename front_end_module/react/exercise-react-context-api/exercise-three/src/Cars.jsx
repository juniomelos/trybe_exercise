import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './MyContext';

class Cars extends React.Component {

  render() {
    const { redCar, blueCar, yellowCar, moveCar } = this.context;

    return (
      <div>
        <div>
          <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
          <button onClick={() => moveCar('redCar', !redCar)} type="button">
            move
          </button>
        </div>
        <div>
          <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
          <button onClick={() => moveCar('blueCar', !blueCar)} type="button">
            move
          </button>
        </div>
        <div>
          <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
          <button onClick={() => moveCar('yellowCar', !yellowCar)} type="button">
            move
          </button>
        </div>
      </div>
    );
  }
}

Cars.contextType = MyContext;

export default Cars;

// const mapStateToProps = (state) => ({
//   redCar: state.carReducer.cars.red,
//   blueCar: state.carReducer.cars.blue,
//   yellowCar: state.carReducer.cars.yellow,
// });

// const mapDispatchToProps = { moveCar };

// export default connect(mapStateToProps, mapDispatchToProps)(Cars);
