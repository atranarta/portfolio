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
        progress="95%"
        width="95%"
      />
      <Skill
        title="ES6"
        progress="75%"
        width="75%"
      />
      <Skill
        title="CSS3"
        progress="90%"
        width="90%"
      />
      <Skill
        title="SCSS/SASS"
        progress="80%"
        width="80%"
      />
      <Skill
        title="Javascript"
        progress="60%"
        width="60%"
      />
      <Skill
        title="React"
        progress="40%"
        width="40%"
      />
      <Skill
        title="NodeJS"
        progress="30%"
        width="30%"
      />
      <Skill
        title="Photoshop"
        progress="40%"
        width="40%"
      />
      <Skill
        title="AdobeXD"
        progress="40%"
        width="40%"
      />
    </div>
  </div>
);

export default Resume;