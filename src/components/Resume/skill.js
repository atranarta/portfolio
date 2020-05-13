import React from 'react';

const SkillBox = (props) => (
  <div className="progress-wrap">
    <h6 className="progress-title">{props.title}</h6>
    <div className="progress">
      <div className="progress-container">
        <span className="progress-active" style={{ width: props.progress }}></span>
      </div>
    </div>
  </div>
);

export default SkillBox;
