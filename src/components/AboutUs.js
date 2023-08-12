import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="content">
        <h1>About Us</h1>
        <p>The expansion of information technology-related content and services is currently unavoidable because it creates new opportunities and encourages the development of businesses that rent out spaces with brand-new contents and services that benefit the community. Finding a room to rent has become a difficult task. However, these duties can be simplified with the help of websites that can assist people in their home search. Because website can make this task simple in the age of smartphones. These websites make it simpler to look for a rental property.

Our project is only dedicated to the room seekers not the house and land. Our system holds all these features that helps for the effective management of room and flat. The room rental website will address the issue of helping tenants to find a room quickly, also maintain their records and contacts. Additionally, it makes easy for tenants to locate the apartments or rooms they need. House owners should also publish information of their rooms.</p>
      </div>

      <footer className="footer">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/available-room">Available Rooms </Link></li>
           
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

export default AboutUs;
