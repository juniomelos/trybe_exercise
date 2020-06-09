import PropTypes from "prop-types";
import React from "react";
// import PropTypes from "prop-types";
import "./Alert.css";

const Alert = (props) => {
  const { hideComponent, contentTitle, content } = props;
  setTimeout(() => hideComponent(), 3000);
  return (
    <div className="Alert">
      <h1>{contentTitle}</h1>
      <p>{content}</p>
    </div>
  );
};

Alert.propTypes = {
  content: PropTypes.string.isRequired,
  contentTitle: PropTypes.string.isRequired,
  hideComponent: PropTypes.func.isRequired
}

export default Alert;
