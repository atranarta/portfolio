import React from 'react';
import SkillBox from './skill';
import Title from './../title';

import { Switch, Route } from "react-router-dom";


const skills = [
  {
    title: "HTML5",
    progress: "95%"
  },
  {
    title: "ES6",
    progress: "75%"
  },
  {
    title: "CSS3",
    progress: "90%"
  },
  {
    title: "SCSS/SASS",
    progress: "80%"
  },
  {
    title: "Javascript",
    progress: "60%"
  },
  {
    title: "React",
    progress: "40%"
  },
  {
    title: "NodeJS",
    progress: "30%"
  },
  {
    title: "Photoshop",
    progress: "40%"
  },
  {
    title: "AdobeXD",
    progress: "40%"
  }
];

const Resume = () => (
  <Switch>
    <Route path="/resume">
      <div className="component">
        <Title
          text="My skills"
        />
        <div className="skills-box">
          {skills.map(skill => (<SkillBox {...skill} />))}
        </div>
      </div>
    </Route>
  </Switch>
);

export default Resume;