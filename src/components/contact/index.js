import React, { useState } from 'react';
import Field from './contact-field';
import Title from './../title';

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSubject, setInputSubject] = useState("");
  const [getUserText, setUserText] = useState("");
  const [messageBool, setMessageBool] = useState(false);

  const showMessage = () => {
    setMessageBool(!messageBool);
  };

  return (
    <div id="contact" className="component">
      <Title
        text="Contact me"
      />
      <h4>Get In Touch</h4>
      <Field 
        id="contact-form-name"
        label="Enter your name"
        value={inputName}
        onChange={event => setInputName(event.target.value)} />
      <Field id="contact-form-email"
        label="Enter your email"
        value={inputEmail}
        onChange={event => setInputEmail(event.target.value)} />
      <Field id="contact-form-subject"
        label="Enter your subject"
        value={inputSubject}
        onChange={event => setInputSubject(event.target.value)} />

      <div className="form-field">
        <label for="contact-form-message">Enter your message</label>
        <textarea type="text"
          name="name"
          id="contact-form-message"
          cols="30"
          rows="6"
          onChange={event => setUserText(event.target.value)}>
        </textarea>
      </div>
      {messageBool && (
        <div className="userMessage">{`Thank you ${inputName} from ${inputSubject} for contacting me! I'll get back to you on your email ${inputEmail} and your message: ${getUserText}`}</div>
      )}
      <div className="form-field">
        <button onClick={showMessage} className="btn" target="_blank" rel="noopener noreferrer">Send Mail</button>
      </div>
    </div>
  )
};

export default Contact;