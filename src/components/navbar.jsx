
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const NavigationBar = () => {
  
  const [roomType, setRoomType] = useState('');
  const [locationType, setLocationType] = useState('');
  const [priceType, setPriceType] = useState('');

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  const handleLocationTypeChange = (event) => {
    setLocationType(event.target.value);
  };

  const handlePriceTypeChange = (event) => {
    setPriceType(event.target.value);
  };
  
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item home-icon"><Link to="/"
      >
        <img src="./images/chabi.jpg" height={40}  width={200} alt="Home" /></Link></li>
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/available-room">Available Rooms</Link></li>
        <li className="nav-item"><Link to="/about">About Us</Link></li>
        <li className="nav-item"><Link to="/login">Login</Link></li>
        <li className="nav-item"><Link to="/register">Register</Link></li>
        <li className="nav-item"><Link to="/admin">Admin</Link></li>
        
        <li className="nav-item search-box">
        <div className="filter-container">
          <input
              type="text"
              className="filter-select"
              placeholder="Location"
              value={locationType}
              onChange={handleLocationTypeChange}
            />
          </div>
          <div className="filter-container">
            <select className="filter-select" value={roomType} onChange={handleRoomTypeChange}>
              <option value="">Select Room</option>
              <option value="1">1 Room</option>
              <option value="1bhk">1 BHK</option>
              <option value="2bhk">2 BHK</option>
              <option value="1bk">1 BK</option>
              <option value="2bk">2 BK</option>
              <option value="3bk">3 BK</option>
              <option value="4bhk">4 BHK</option>
              <option value="4bk">4 BK</option>
            </select>
          </div>
         
          <div className="filter-container">
            <select className="filter-select" value={priceType} onChange={handlePriceTypeChange}>
              <option value="">Select Price</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
          <button>Search</button>
        </li>
        <li className="nav-item">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
