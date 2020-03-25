import React from 'react';
import Skill from './skill';
import Title from './../title';

const Resume = () => (
  <div id="resume" className="component">
    <Title 
      text="My skills"
    />
    <div className="skills-box">
      <Skill />
    </div>
  </div>
);

export default Resume;