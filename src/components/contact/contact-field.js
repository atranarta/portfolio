import React from 'react';

const Field = props => (
  <div className="form-field">
    <label for={props.for}>{props.label}</label>
    <input type="text" name="name" id={props.id} value="" />
  </div>
);

export default Field;