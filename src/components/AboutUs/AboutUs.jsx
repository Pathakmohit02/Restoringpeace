  import React from 'react';
  import './AboutUs.css';

  const AboutUs = () => {
    return (
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="text-content">
            <p>
              Being psychologically healthy is integral to our well-being because our feelings, thinking, physiology and
              behaviour co-relate to our mental wellness. The state of our mental health impacts our self-esteem,
              decision-making process, response to stress and relationships.
            </p>
            <p>
              Many reasons lead to mental health challenges, and trauma is one of the significant contributors.
              Traumatic experience(s) hurt and disturb your sense of worth, leading to anxiety, depression, extreme fear
              of abandonment and other psychological challenges. The unprocessed trauma also holds you back from
              reaching your potential. It seems like you are stuck, but...
            </p>
            <p className="highlight-text">There is HOPE for HEALING and RESTORATION.</p>
            <p>
              At Restoring Peace Counselling & Consultancy, our clinicians provide professional counselling and
              psychotherapy services for individuals and families who experienced trauma, anxiety, attachment injuries,
              depression, grief and other mental health challenges. Our clinicians can also support you to process
              important decision making process, performance enhancement and relationship issues.
            </p>
            <p className="highlight-text">Overcome the hindrance to your growth.</p>
            <p className="italic-text">Resolve your hurts, Restore your peace and Regain charge of your life!</p>
          </div>
        </div>
        <div className="about-us-buttons">
          <button className="about-btn">About</button>
          <button className="about-btn">Services</button>
          <button className="about-btn">Our Team</button>
          <button className="about-btn">FAQ</button>
          <button className="about-btn">Our Founder</button>
        </div>
      </div>
    );
  };

  export default AboutUs;
