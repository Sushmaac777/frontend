import React from 'react';
import '../../css/profile.css'; // Import your CSS file for styling
import CircularAvatar from './CircularAvatar'; // Make sure to import CircularAvatar component

const Profile = () => {
  // You can replace these with actual user data
  const user = {
    name: 'sima kc',
    email: 'simakc@example.com',
    phoneNumber: '9876543210',
    citizenshipNumber: '123456789',
    // Add other user data here
  };
  const handleLogout = () => {
    //  logout logic 
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-details">
        <div className="avatar-section">
          <CircularAvatar src="url-to-user-avatar.jpg" alt="User Avatar" />
          <button className="change-photo-button">Change Photo</button>
        </div>
        <div className="user-info">
          <p className="user-name">{user.name}</p>
          <p className="user-email">{user.email}</p>
          <p className="user-loggedin">Logged in as</p>
          <p className="user-phone">{user.phoneNumber}</p>
          <p className="user-citizenship">{user.citizenshipNumber}</p>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
