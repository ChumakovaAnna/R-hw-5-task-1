import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
  children: PropTypes.array.isRequired,
};

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

export default Card;