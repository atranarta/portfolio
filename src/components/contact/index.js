import React from 'react';

const Contact = () => (
  <div id="contact" className="component">
    <div className="title">
      <h1>Contact me</h1>
      <span>Contact me</span>
    </div>
    <h4>Get In Touch</h4>
    <form>
      <div className="form-field">
        <label for="contact-form-name">Enter your name</label>
        <input type="text" name="name" id="contact-form-name" value="" />
      </div>
      <div className="form-field">
        <label for="contact-form-email">Enter your email</label>
        <input type="text" name="name" id="contact-form-email" value="" />
      </div>
      <div className="form-field">
        <label for="contact-form-subject">Enter your subject</label>
        <input type="text" name="name" id="contact-form-subject" value="" />
      </div>
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