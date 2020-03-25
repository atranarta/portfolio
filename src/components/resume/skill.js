import React from 'react';

const skills = [
  {
    title: "HTML5",
    width: "95%"
  },
  {
    title: "ES6",
    width: "75%"
  },
  {
    title: "CSS3",
    width: "90%"
  },
  {
    title: "SCSS/SASS",
    width: "80%"
  },
  {
    title: "Javascript",
    width: "60%"
  },
  {
    title: "React",
    width: "40%"
  },
  {
    title: "NodeJS",
    width: "30%"
  },
  {
    title: "Photoshop",
    width: "40%"
  },
  {
    title: "AdobeXD",
    width: "40%"
  }
];

const Skill = () => (
  skills.map(skill => (
    <div className="progress-wrap">
      <h6 className="progress-title">{skill.title}</h6>
      <div className="progress">
        <div className="progress-container">
          <span className="progress-active" style={{ width: skill.width }}></span>
        </div>
      </div>
    </div>
  ))
);

export default Skill;
