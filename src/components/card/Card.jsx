import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ project_info}) => {

  return (
    <Link to={`/project/${project_info.id.toString()}`} className="card">
          <img src={project_info.image} alt="Card Image" />
          <div className="overlay">
            <h2>{project_info.project_title}</h2>
            <p>{project_info.s_description}</p>
          </div>
    </Link>
     
  );
};


export default Card;
