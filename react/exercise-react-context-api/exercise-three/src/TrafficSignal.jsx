import React from 'react';
import MyContext from './MyContext';
// import redSignal from './images/redSignal.jpeg';
// import greenSignal from './images/greenSignal.jpeg';
// import yellowSignal from './images/yellowSignal.jpeg';

// const renderSignal = (signalColor) => {
//   if (signalColor === 'red') {
//     return redSignal;
//   }
//   if (signalColor === 'green') {
//     return greenSignal;
//   }
//   if (signalColor === 'yellow') {
//     return yellowSignal;
//   }
//   return null;
// };

class TrafficSignal extends React.Component {

  // renderSignal = (signalColor) => {
  //   if (signalColor === 'red') {
  //     return redSignal;
  //   }
  //   if (signalColor === 'green') {
  //     return greenSignal;
  //   }
  //   if (signalColor === 'yellow') {
  //     return yellowSignal;
  //   }
  //   return null;
  // };

  render() {
    const { signal, renderSignal, changeSignal } = this.context;
    console.log(this.context)
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignal('red')} type="button">
            Red
          </button>
          <button onClick={() => changeSignal('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignal('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={renderSignal(signal.color)} alt="" />
      </div>
    );
  }
}

TrafficSignal.contextType = MyContext;

export default TrafficSignal;

// const mapStateToProps = (state) => ({
//   signalColor: state.trafficSignalReducer.signal.color,
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeSignal: (payload) => dispatch(changeSignal(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
