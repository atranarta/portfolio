import React from 'react';
import Field from './contact-field';

const Contact = () => (
  <div id="contact" className="component">
    <div className="title">
      <h1>Contact me</h1>
      <span>Contact me</span>
    </div>
    <h4>Get In Touch</h4>
    <form>
      <Field />
      <div className="form-field">
        <label for="contact-form-message">Enter your message</label>
        <textarea type="text" name="name" id="contact-form-message" cols="30" rows="6"></textarea>
      </div>
      <div className="form-field">
        <button className="btn" type="submit">Send Mail</button>
      </div>
    </form>
  </div>
);

export default Contact;