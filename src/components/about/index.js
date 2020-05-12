import React from 'react';
import AboutList from './aboutList';
import Title from './../title';

import { Switch, Route } from "react-router-dom";

const About = () => (
  <Switch>
    <Route exact path="/">
      <div id="about" className="component">
        <Title
          text="About me"
        />
        <h2>I am <span>Tetiana Rabiievska</span></h2>
        <p>I am a frontend web developer. I can provide clean code and pixel perfect design.
      I also make website more &amp; more interactive.</p>
        <ul>
          <AboutList />
        </ul>
        <a className="btn" href="./../../img/Tetiana Rabiievska.pdf" download>Download CV</a>
      </div>
    </Route>
  </Switch>
);

export default About;
