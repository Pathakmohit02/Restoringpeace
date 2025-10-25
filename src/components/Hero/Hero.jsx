import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background-mobile"></div> {/* Separate container for mobile background image */}
      <div className="hero-content">
        <h1>Restoring Peace</h1>
        <p>Resolving Conflicts with in and beyond</p>
        <div className="hero-buttons">
          <button className="get-started-btn">Get Started &rarr;</button>
          <button className="free-trial-btn">Free trial</button>
        </div>
      </div>
      {/* Removed original hero-image div as heroo.png is now the background */}
    </div>
  );
};

export default Hero;
