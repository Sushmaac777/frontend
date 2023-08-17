import React from 'react';
import '../../css/LandlordRegistrationForm.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const LandlordRegistrationForm = () => {
  const navigate = useNavigate(); // Import UseNavigate to handle navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submission logic here
  };

  const handleCloseForm = () => {
    navigate('/available-rooms'); // Redirect to home page
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <button className="close-btn" onClick={handleCloseForm}>
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            required
          />
          <small>Format: 1234567890</small>

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="citizenship">Citizenship Number:</label>
          <input type="text" id="citizenship" name="citizenship" required />
          
          <br />
          <br />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LandlordRegistrationForm;
