import React from 'react';
import './Footer.css';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="company-name">RESTORE PEACE COUNSELLING & CONSULTANCY PTE LTD</h3>
        <p className="location">Singapore</p>
        <p>10 Jalan Besar #12-06 / #12-09 / #09-09 Sim Lim Tower Singapore 208787</p>
        <p>Email: <a href="mailto:contact@restoringpeace.com.sg">contact@restoringpeace.com.sg</a></p>
        <p>Mobile: 8889 1848 / 8395 5471 / 9484 9067</p>

        <div className="opening-hours">
          <h4>Opening Hours (by Appointment):</h4>
          <ul>
            <li>Monday: 9am-9pm</li>
            <li>Tuesday: 9am-9pm</li>
            <li>Wednesday: 9am-9pm</li>
            <li>Thursday: 9am-9pm</li>
            <li>Friday: 9am-9pm</li>
            <li>Saturday: 9am-6pm</li>
            <li>Close on Sunday</li>
          </ul>
        </div>

        <div className="services-list">
          <p className="services-heading">Professional Counselling and Psychotherapy Services for</p>
          <ul>
            <li>• Trauma • Anxiety • Addictions • Adjustment • Behavioral Issue • Depression • Grief and Loss</li>
            <li>• Personality Disorder • PTSD and C-PTSD • Relationship</li>
            <li>and other life challenges</li>
          </ul>
          <ul>
            <li>• Clinical Supervision • Support Group • Training</li>
          </ul>
        </div>
      </div>
      <div className="footer-social-icons">
        <SocialMediaIcons layout="horizontal" />
      </div>
    </footer>
  );
};

export default Footer;
