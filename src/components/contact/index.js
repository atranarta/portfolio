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
      <div className="linkedin">
        <img src={Linkedin} className="linkedin" alt="LinkedIn"></img>
        <p>My LinkedIn profile – <a href="https://www.linkedin.com/in/tetiana-rabiievska">CLICK</a></p>
      </div>
      <div className="github">
        <img src={Github} className="github" alt="GitHub"></img>
        <p>My GitHub profile – <a href="https://github.com/atranarta">CLICK</a></p>
      </div>
    </div>
  )
};

export default Contact;