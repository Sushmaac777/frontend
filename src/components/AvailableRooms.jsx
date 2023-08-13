import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for routing
import './AvailableRooms.css'; // Import your CSS file for styling

const AvailableRooms = () => {
  const history = useHistory(); // Initialize useHistory

  const [rooms, setRooms] = useState([
    {
      id: 1,
      title: '1 bhk',
      location: 'Kathmandu',
      price: 3000,
      description: 'A beautiful room.',
      imageUrl: './images/home.png', // Add image URL for each room
      booked: false,
    },
    {
      id: 2,
      title: '1bk',
      location: 'Lalitpur',
      price: 12000,
      description: 'A comfortable 1-bedroom with kitchen.',
      imageUrl: 'url-to-your-image-2.jpg', // Add image URL for each room
      booked: false,
    },
    {
      id: 3,
      title: '3bhk',
      location: 'Bhaktapur',
      price: 25000,
      description: 'Beautiful flat.',
      imageUrl: 'url-to-your-image-3.jpg', // Add image URL for each room
      booked: false,
    },
    // Add more rooms as needed
  ]);

  const handleBookClick = (roomId) => {
    const updatedRooms = rooms.map((room) =>
      room.id === roomId ? { ...room, booked: !room.booked } : room
    );
    setRooms(updatedRooms);

  };
  const handleViewClick = (roomId) => {
    // Navigate to the room details page with the room ID
    history.push(`/room/${roomId}`);
  };

  return (
    <div className="available-rooms-container">
      <h1 className="page-title">Available Rooms</h1>
      <div className="room-list">
        {rooms.map((room) => (
          <div className="room" key={room.id}>
            <div className="room-title">
              <h2>{room.title}</h2>
              <button
                className={room.booked ? 'booked-button' : 'book-button'}
                onClick={() => handleBookClick(room.id)}
              >
                {room.booked ? 'Unbook' : 'Book'}
              </button>
              <button
                  className="view-button"
                  onClick={() => handleViewClick(room.id)}
                >
                  View
                </button>
            </div>
            <div className="room-details">
              <div className="room-image">
                <img src={room.imageUrl} alt={room.title} />
              </div>
              <div className="room-info">
                <p className="location">Location: {room.location}</p>
                <p className="price">Price: Rs.{room.price} per month</p>
                <p className="description">{room.description}</p>
              </div>
            </div>
          </div>
        ))}
        {rooms.length === 0 && <p className="no-rooms-msg">No rooms available currently.</p>}
      </div>
    </div>
  );
};

export default AvailableRooms;
