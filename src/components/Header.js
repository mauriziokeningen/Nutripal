import React from 'react';
import './Header.css';
import searchIcon from '../assets/Search.png'; // Import ảnh kính lúp


const Header = () => {
  return (
    <div className="header">
      <h2>Your Patients</h2>
      <div className="search-container">
      <img src={searchIcon} alt="Search Icon" className="search-icon" />
      <input
        type="text"
        placeholder="Search a patient"
        className="search-bar"
      />
      </div>
     
    </div>
  );
};

export default Header;
