import React from 'react';

const Field = (props) => (
  <div className="form-field">
    <label for={props.id}>{props.label}</label>
    <input type="text" name="name" id={props.id} onChange={props.onChangeFunc} />
  </div>
);

export default Field;