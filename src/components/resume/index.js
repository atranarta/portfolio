import React from 'react';
import Skill from './skill';

const Resume = (props) => (
  <div id="resume" className="component">
    <div className="title">
      <h1>My skills</h1>
      <span>My skills</span>
    </div>
    <div className="skills-box">
      <Skill />
    </div>
  </div>
);

export default Resume;