import React from 'react';
import '../../css/CircularAvatar.css'; // Import your CSS 

const CircularAvatar = ({ src, alt }) => {
  return <img className="circular-avatar" src={src} alt={alt} />;
};

export default CircularAvatar;
