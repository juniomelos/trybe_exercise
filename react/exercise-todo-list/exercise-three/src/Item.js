import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { content, clickRemoveTodo, id } = props;
  return (
    <div className="Item">
      <div className={content}>
        <input
          id={id}
          type="radio"
          name="tasks"
          value={content}
          onClick={clickRemoveTodo}
        />
        <label htmlFor={id}>{content}</label>
      </div>
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};
