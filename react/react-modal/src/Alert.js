import React from "react";
import PropTypes from "prop-types";
import "./Alert.css";

const Alert = (props) => {
  const { hideComponent, children, timeSeconds } = props;
  setTimeout(() => hideComponent(), timeSeconds * 1000);
  return <div className="Alert">{children}</div>;
};

Alert.propTypes = {
  timeSeconds: PropTypes.number,
  childrem: PropTypes.node.isRequired,
  hideComponent: PropTypes.func.isRequired,
};

export default Alert;
