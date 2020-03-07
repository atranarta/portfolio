import React from 'react';

const Resume = () => (
  <div id="resume" className="component">
    <div className="title">
      <h1>My skills</h1>
      <span>My skills</span>
    </div>
    <div className="skills-box">
      <div className="progress-wrap">
        <h6 className="progress-title">HTML5</h6>
        <div className="progress">
          <div className="progress-percentage">95%</div>
          <div className="progress-container">
            <span className="progress-active" style={{ width: "95%" }}></span>
          </div>
        </div>
      </div>
      <div className="progress-wrap">
        <h6 className="progress-title">CSS3</h6>
        <div className="progress">
          <div className="progress-percentage">90%</div>
          <div className="progress-container">
            <span className="progress-active" style={{ width: "90%" }}></span>
          </div>
        </div>
      </div>
      <div className="progress-wrap">
        <h6 className="progress-title">Javascript</h6>
        <div className="progress">
          <div className="progress-percentage">60%</div>
          <div className="progress-container">
            <span className="progress-active" style={{ width: "60%" }}></span>
          </div>
        </div>
      </div>
      <div className="progress-wrap">
        <h6 className="progress-title">React</h6>
        <div className="progress">
          <div className="progress-percentage">20%</div>
          <div className="progress-container">
            <span className="progress-active" style={{ width: "20%" }}></span>
          </div>
        </div>
      </div>
      <div className="progress-wrap">
        <h6 className="progress-title">NodeJS</h6>
        <div className="progress">
          <div className="progress-percentage">30%</div>
          <div className="progress-container">
            <span className="progress-active" style={{ width: "30%" }}></span>
          </div>
        </div>
      </div>
      <div className="progress-wrap">
        <h6 className="progress-title">Photoshop</h6>
        <div className="progress">
          <div className="progress-percentage">40%</div>
          <div className="progress-container">
            <span className="progress-active" style={{ width: "40%" }}></span>
          </div>
        </div>
      </div>
      <div className="progress-wrap">
        <h6 className="progress-title">AdobeXD</h6>
        <div className="progress">
          <div className="progress-percentage">40%</div>
          <div className="progress-container">
            <span className="progress-active" style={{ width: "40%" }}></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;