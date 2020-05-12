import React from 'react';
import SkillBox from './skill';
import Title from './../title';

import { Switch, Route } from "react-router-dom";


const skills = [
  {
    key: 1,
    title: "HTML5",
    progress: "95%"
  },
  {
    key: 2,
    title: "ES6",
    progress: "75%"
  },
  {
    key: 3,
    title: "CSS3",
    progress: "90%"
  },
  {
    key: 4,
    title: "SCSS/SASS",
    progress: "80%"
  },
  {
    key: 5,
    title: "Javascript",
    progress: "60%"
  },
  {
    key: 6,
    title: "React",
    progress: "40%"
  },
  {
    key: 7,
    title: "NodeJS",
    progress: "30%"
  },
  {
    key: 8,
    title: "Photoshop",
    progress: "40%"
  },
  {
    key: 9,
    title: "AdobeXD",
    progress: "40%"
  }
];

const Resume = () => (
  <Switch>
    <Route path="/resume">
      <div id="resume" className="component">
        <Title
          text="My skills"
        />
        <div className="skills-box">
          {skills.map(skill => (<SkillBox key={skill.key} {...skill} />))}
        </div>
      </div>
    </Route>
  </Switch>
);

export default Resume;