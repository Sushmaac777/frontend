import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navbar';
import Home from './components/Home'; // Create these components
import AboutUs from './components/AboutUs'; // Create these components
import Login from './components/Login'; // Create these components
import Register from './components/Register'; // Create these components
import AvailableRooms from "./components/AvailableRooms";
import Profile from "./components/profile";
import LandlordRegistrationForm from './components/LandlordRegistrationForm';
import TenantRegistrationForm from './components/TenantRegistrationForm';
import Admin from './components/Admin';

function App(){
  return(
    <Router>
    <NavigationBar />
    <Switch>
  
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/available-room" component={AvailableRooms} />
      <Route path="/profile" component={Profile}/>
      <Route path="/tenantRegister" component={TenantRegistrationForm} />
      <Route path="/tenantRegister" component={LandlordRegistrationForm} />

    </Switch>
  </Router>
  );
}
export default App;