import React from 'react';
import Title from './../title';

import Linkedin from './../../img/linkedin.png';
import Github from './../../img/github.png';

const Contact = () => {
  return (
    <div id="contact" className="component">
      <Title
        text="Contact me"
      />
      <h4>Get In Touch</h4>
      <div className="contact-container">
        <a className="btn" href="https://www.linkedin.com/in/tetiana-rabiievska">
          <img src={Linkedin} alt="LinkedIn"></img>
          LinkedIn
        </a>
        <a className="btn" href="https://github.com/atranarta">
          <img src={Github} alt="LinkedIn"></img>
          GitHub
        </a>
      </div>
    </div>
  )
};

export default Contact;