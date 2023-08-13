import React from 'react';
import './CircularAvatar.css'; // Import your CSS file for styling

const CircularAvatar = ({ src, alt }) => {
  return <img className="circular-avatar" src={src} alt={alt} />;
};

export default CircularAvatar;
