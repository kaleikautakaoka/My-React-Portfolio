
import React from 'react';
import { rmHC } from '../../utils/helpers';

function Projects({ project }) {

    const {
        name,
        description,
        link,
    } = project;

    return (
        <div className="project" key={name}>
        <img
          src={`images/${name}.png`}
          alt={rmHC(name)}
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href={link}>{rmHC(name)}</a>{' '}
            <a href={link}>
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
   

export default Projects;