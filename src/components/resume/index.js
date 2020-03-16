import React from 'react';
import Skill from './skill';

const Resume = (props) => (
  <div id="resume" className="component">
    <div className="title">
      <h1>My skills</h1>
      <span>My skills</span>
    </div>
    <div className="skills-box">
      <Skill
        title="HTML5"
        width="95%"
      />
      <Skill
        title="ES6"
        width="75%"
      />
      <Skill
        title="CSS3"
        width="90%"
      />
      <Skill
        title="SCSS/SASS"
        width="80%"
      />
      <Skill
        title="Javascript"
        width="60%"
      />
      <Skill
        title="React"
        width="40%"
      />
      <Skill
        title="NodeJS"
        width="30%"
      />
      <Skill
        title="Photoshop"
        width="40%"
      />
      <Skill
        title="AdobeXD"
        width="40%"
      />
    </div>
  </div>
);

export default Resume;