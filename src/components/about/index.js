import React from 'react';
import AboutList from './aboutList'

const About = () => (
  <div id="about" className="component">
    <div className="title">
      <h1>About me</h1>
      <span>About me</span>
    </div>
    <h2>I am <span>Tetiana Rabiievska</span></h2>
    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. 
      I also make website more &amp; more interactive.</p>
    <ul>
      <AboutList />
    </ul>
    <a className="btn" href="./../../img/Tetiana Rabiievska.pdf" download>Download CV</a>
  </div>
);

export default About;
