import React from 'react';
import './TenantRegistrationForm.css'; // Import your CSS file for styling

const TenantRegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="tenant-registration-form">
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
        <br />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default TenantRegistrationForm;
