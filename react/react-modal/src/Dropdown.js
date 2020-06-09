import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      clickedItemId: this.props.listContent[0].id,
    };
  }

  toggleDrown = () => {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  };

  handleItemClick = (id) => {
    this.setState ({
      clickedItemId: id,
    })
  }

  render() {
    const { children, listContent } = this.props;
    const { isOpen, clickedItemId } = this.state;
    const { item } = listContent.find((element) => element.id === clickedItemId);

    return (
      <div className="list-container">
        <span>{children}</span>
        <div className="dropdown-button" onClick={this.toggleDrown}>
          {item}
        </div>
        <div className={isOpen ? "dropdown-menu" : "dropdown-menu-hidden"}>
          {listContent.map(({ id, item }) => (
            <div key={id} onClick={() => this.handleItemClick(id)}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// caso eu não passe nada como children entra no defaultProps.
Dropdown.defaultProps = {
  children: "Minha lista",
};

Dropdown.propTypes = {
  children: PropTypes.node,
  listContent: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default Dropdown;
