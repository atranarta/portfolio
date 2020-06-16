import React from 'react';
import AboutList from './aboutList';
import Title from './../title';

const About = () => (
  <div id="about" className="component">
    <Title
      text="About me"
    />
    <h2>I am <span>Tetiana Rabiievska</span></h2>
    <p>I'm a highly motivated Frontend Developer, passionate about creating and developing
      pixel-perfect user interfaces, always considering the latest trends in Web development.</p>
    <ul>
      <AboutList />
    </ul>
    <a className="btn" href="https://www.linkedin.com/in/tetiana-rabiievska/">See my LinkedIn</a>
  </div>
);

export default About;
