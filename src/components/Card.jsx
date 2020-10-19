import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.object,
};

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
          {props.children}
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;