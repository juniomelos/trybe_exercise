import React from 'react';
import './App.css';

class ButtonFilter extends React.Component {
  handleClick = event => {
    this.props.filter(event.target.innerHTML);
  };

  render() {
    return (
      <div>
        <p>
          <strong>Filter Type:</strong>
        </p>
        <button className='btn' onClick={this.handleClick}>All</button>
        <button className='btn' onClick={this.handleClick}>Fire</button>
        <button className='btn' onClick={this.handleClick}>Psychic</button>
      </div>
    );
  }
}

export default ButtonFilter;
