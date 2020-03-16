import React from 'react';

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
      <li><b>Full Name</b><span>Tetiana Rabiievska</span></li>
      <li><b>Age</b><span>30</span></li>
      <li><b>Languages</b><span>English (Professional working proficiency), German (Upper Intermediate), Ukrainian (Native), Russian (Native), Polish (Elementary)</span></li>
      <li><b>Location</b><span>Berlin, Germany</span></li>
    </ul>
    <a className="btn" href="./../../img/Tetiana Rabiievska.pdf" download>Download CV</a>
  </div>
);

export default About;
