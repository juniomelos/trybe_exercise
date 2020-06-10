
import React from "react";

class Inputs extends React.Component {
  render() {
    const { id, name, maxLength, type, style, onChange } = this.props;

    return (
      <div>
        <input className='form-control form-control-lg'
          type={type}
          placeholder={id}
          required="required"
          name={name}
          id={id}
          maxLength={maxLength}
          style={style}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Inputs;