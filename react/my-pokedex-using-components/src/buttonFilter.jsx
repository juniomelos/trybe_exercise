import React from 'react';
import './App.css';

class ButtonFilter extends React.Component {
  handleClick(event) {
    this.props.filter(event.target.innerHTML);
  }

  render() {
    return (
      <div>
        <p><strong>Filter by Type:</strong></p>
        <button onClick={this.handleClick.bind(this)}>Fire</button>
        <button onClick={this.handleClick.bind(this)}>Psychic</button>
        <button onClick={this.handleClick.bind(this)}>All</button>
      </div>
    );
  }
}

export default ButtonFilter;
