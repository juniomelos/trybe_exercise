import React from 'react';

class ButtonNext extends React.Component{

  handleClick(event){
    this.props.next();
  }

  render(){
    return (
      <button className='btn' onClick={this.handleClick.bind(this)}>Next =></button>
    )
  }
}

export default ButtonNext; 
