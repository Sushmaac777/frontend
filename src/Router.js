import React from "react";
import {  Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AvailableRooms from "./components/pages/AvailableRooms";
import Profile from "./components/pages/profile";
import LandlordRegistrationForm from './components/pages/LandlordRegistrationForm';
import TenantRegistrationForm from './components/pages/TenantRegistrationForm';
import Admin from './components/pages/Admin';
import NavigationBar from "./components/pages/navbar";



const Routers = () => {
  return (
   <>
    <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/available-room" element={<AvailableRooms />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tenantRegister" element={<TenantRegistrationForm />} />
        <Route path="/landlordRegister" element={<LandlordRegistrationForm />} />
      </Routes>
      </>
  );
}

export default Routers;
