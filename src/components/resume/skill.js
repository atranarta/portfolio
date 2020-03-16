import React from 'react';

const Skill = props => (
  <div className="progress-wrap">
    <h6 className="progress-title">{props.title}</h6>
    <div className="progress">
      <div className="progress-container">
        <span className="progress-active" style={{ width: props.width }}></span>
      </div>
    </div>
  </div>
);

export default Skill;
