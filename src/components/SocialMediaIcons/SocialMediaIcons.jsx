import React from 'react';
import './SocialMediaIcons.css';

const SocialMediaIcons = ({ layout }) => {
  const containerClass = layout === 'horizontal' ? 'social-icons-container-horizontal' : 'social-icons-container-vertical';

  return (
    <div className={containerClass}>
      <a href="#" className="social-icon"><img src="/fb.jpeg" alt="Facebook" /></a>
      <a href="#" className="social-icon"><img src="/ig.png" alt="Instagram" /></a>
      <a href="#" className="social-icon"><img src="/whats.png" alt="WhatsApp" /></a>
      <a href="#" className="social-icon"><img src="/linkedin.png" alt="LinkedIn" /></a>
    </div>
  );
};

export default SocialMediaIcons;
