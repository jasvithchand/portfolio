import React from 'react';
import PropTypes from 'prop-types';
import './line.css'; // Import your CSS file for styling

const Line = ({ color }) => {
  const lineStyle = {
    background: `linear-gradient(to right, transparent, ${color}, transparent)`,
  };
  return <div className="line" style={lineStyle}></div>;
};

Line.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Line;