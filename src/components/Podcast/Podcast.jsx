import React from 'react';
import './Podcast.css';

const Podcast = () => {
  return (
    <div className="podcast-container">
      <div className="podcast-image">
        <img src="/podcast.avif" alt="Woman listening to podcast" />
      </div>
      <div className="podcast-content">
        <h2><span className="light-text">OUR</span>PODCAST</h2>
        <p>
          Check out our Restore Your Peace podcast! Simply click on
          the Spotify icon on the left side and bottom of our website to
          follow and get live updates when new episodes come out.
          Thanks for listening!
        </p>
        <button className="spotify-btn">Spotify</button>
      </div>
    </div>
  );
};

export default Podcast;
