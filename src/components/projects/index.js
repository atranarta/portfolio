import React from 'react';
import Project from './project';
import Title from '../title';

const Projects = () => (
  <div id="projects" className="component">
    <Title
      text="Projects"
    />
    <div className="projects-wrap">
      <Project />
    </div>
  </div>
);

export default Projects;