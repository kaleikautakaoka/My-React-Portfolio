import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project({ project }) {

    const {
        name,
        description,
        link,
        github,
        index,
    } = project;

    return (
        <div className="project" key={name}>
                 <img
        src={require(`../../assets/projects/${name}.jpg`).default}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
            <h3 className="project-name">{capitalizeFirstLetter(name)}</h3>
            <p className="project-description">{description}</p>
            <p className="project-link">{link}</p>
            <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
            <p className="project-github">{github}</p>
            <p className="project-index">{index}</p>
        </div>
    );
}

export default Project;