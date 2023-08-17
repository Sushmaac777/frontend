
import React from 'react';
import '../../css/home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="image">
          <img src="/images/roomrent.webp" alt="Home" />
        </div>
        <div className="text">
          <h1>Welcome to Our ROOM RENTAL Website</h1>
          <p>Find perfect room for you.</p>
        </div>
      </div>

      <footer className="footer">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/available-room">Available Rooms</Link></li>
            
          </ul>
        </div>
        <div className="location">
          <h3>Location</h3>
          <ul>
            <li>Kathmandu</li>
            <li>Lalitpur</li>
            <li>Bhaktapur</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:roomrental_@gmail.com">roomrental_@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

