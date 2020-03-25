import React from 'react';
import Field from './contact-field';
import Title from './../title';

const Contact = () => (
  <div id="contact" className="component">
    <Title 
      text="Contact me"
    />
    <h4>Get In Touch</h4>
    <form>
      <Field id="contact-form-name" label="Enter your name" />
      <Field id="contact-form-email" label="Enter your email" />
      <Field id="contact-form-subject" label="Enter your subject" />

      <div className="form-field">
        <label for="contact-form-message">Enter your message</label>
        <textarea type="text" name="name" id="contact-form-message" cols="30" rows="6"></textarea>
      </div>
      <div className="form-field">
        <a href="mailto:tetiana.rabiievska@gmail.com" className="btn" target="_blank" rel="noopener noreferrer">Send Mail</a>
      </div>
    </form>
  </div>
);

export default Contact;