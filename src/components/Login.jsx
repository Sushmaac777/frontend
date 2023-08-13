import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; // Import your CSS file
import './AvailableRooms'

const Login = ({ onClose }) => {
  const history = useHistory(); // Import useHistory to handle navigation

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLoginClick = () => {
    setShowForgotPassword(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  const handleCloseForm = () => {

    history.push('/available-rooms'); // Redirect to home page
  
  };

  return (
    <div className="overlay">
      <div className="login-container">
        {showForgotPassword ? (
          <div>
            <button className="close-btn" onClick={handleBackToLoginClick}>
              &times;
            </button>
            <h2>Forgot Password</h2>
            <button onClick={handleBackToLoginClick} className="reset-password-button">
              Reset Password
            </button>
            <p>Enter your email address to reset your password.</p>
            <form className="forgot-password-form">
              <label htmlFor="forgot-email">Email:</label>
              <input
                type="email"
                id="forgot-email"
                required
              />
              <button type="submit" className="reset-password-button">Reset Password</button>
            </form>
          </div>
        ) : (
          <div>
            <button className="close-btn" onClick={handleCloseForm}>
              &times;
            </button>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />

              <button type="submit" className="login-button">Login</button>
              <button
                type="button"
                className="forgot-password-link"
                onClick={handleForgotPasswordClick}
              >
                Forgot Password?
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
