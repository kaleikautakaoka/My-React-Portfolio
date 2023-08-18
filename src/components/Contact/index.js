import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';


function Contact() {
    const [formState, setFormState] = useState({
      name: 'Sachi Takaoka',
      email: 'sachitakaoka@gmail.com',
      message: 'Nice to meet you!',
    });
    const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

    const handleChange = (e) => {
        if (e.target.name === 'email') {

            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');

            } else {
                setErrorMessage('');
            }

        } else {
                
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
    
                } else {
                    setErrorMessage('');
                }
            }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    };

    return (
        <section>
          <form id="contact-form" className="contactForm" onSubmit={handleSubmit}>
            <h1>Contact me</h1>
            <p>Fill out the form below to contact me!</p>
            <div>
              <label htmlFor="name">Name:</label>
              <input data-testid="name"
              value={name}
              className="inputField"
                type="text"
                name="name"
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input data-testid="email"
              defaultValue={email}
                type="email"
                name="email"
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea data-testid="message"
              defaultValue={message}
              type="text"
                name="message"
                rows="5"
                onBlur={handleChange}
              />
            </div>
            <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
          
    
    export default Contact;