import React from 'react';

const inputList = [
  {
    for: "contact-form-name",
    label: "Enter your name",
    id: "contact-form-name"
  },
  {
    for: "contact-form-email",
    label: "Enter your email",
    id: "contact-form-email"
  },
  {
    for: "contact-form-subject",
    label: "Enter your subject",
    id: "contact-form-subject"
  },
]

const Field = () => (
  inputList.map(item => (
    <div className="form-field">
      <label for={item.for}>{item.label}</label>
      <input type="text" name="name" id={item.id} value="" />
    </div>
  ))
);

export default Field;