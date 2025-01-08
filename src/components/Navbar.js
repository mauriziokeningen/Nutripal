import React from 'react';
import './Navbar.css';
import patientsIcon from '../assets/Profiles.png';       
import notificationsIcon from '../assets/Notification.png';
import chatsIcon from '../assets/Chat.png';

const Navbar = () => {
  return (
    <div className="navbar">
        
      <div className="nav-item active">
        <img src={patientsIcon} alt="Patients" className="nav-icon" />
        <p className="nav-text">Patients</p>
      </div>

      <div className="nav-item">
        <img src={notificationsIcon} alt="Notifications" className="nav-icon" />
        <p className="nav-text">Notifications</p>
      </div>

      <div className="nav-item">
        <img src={chatsIcon} alt="Active Chats" className="nav-icon" />
        <p className="nav-text">Active Chats</p>
      </div>
    </div>
  );
};

export default Navbar;
