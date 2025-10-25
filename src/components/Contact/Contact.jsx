import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>ENQUIRY AND APPOINTMENT BOOKING</h1>
      </div>
      <div className="contact-form-area">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name *" required />
            <input type="text" placeholder="Phone No. *" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email *" required />
            <select>
              <option value="">Presenting Concern 1*</option>
            </select>
          </div>
          <div className="form-row">
            <select>
              <option value="">Presenting Concern 2</option>
            </select>
            <select>
              <option value="">Preferred Therapist*</option>
            </select>
          </div>
          <div className="form-row">
            <span className="note-text">*Trainee Counsellors are unable to accept cases with ***</span>
            <select>
              <option value="">Face-to-Face or Online*</option>
            </select>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Preferred Day & Time (If any)" />
            <textarea placeholder="Message*" rows="5" required></textarea>
          </div>
          <div className="form-consent">
            <input type="checkbox" id="privacyConsent" required />
            <label htmlFor="privacyConsent">
              I agree to the privacy terms and I give consent to Restoring Peace to contact me regarding my queries.
            </label>
          </div>
          <p className="privacy-link">
            Please read the <a href="#">Data Protection Notice</a> before you click the 'Send' button.
          </p>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
