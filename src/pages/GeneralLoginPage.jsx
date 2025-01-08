import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './GeneralLoginPage.css'; 
import verticalLogo from '../assets/horizontal_logo.png'; 

export const GeneralLoginPage = () => {
    const [role, setRole] = useState(''); 
    const navigate = useNavigate();

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole); 
        console.log(`Role selected: ${selectedRole}`); // This is for debugging, I'll remove it later

        if (selectedRole === 'user') {
            navigate('/user_login'); // Navigate to login_page when 'user' is selected
        }
      };

  return (
    <div className="login-page">
      <img src={verticalLogo} alt="Logo" className="logo" />

      <div className="buttons-container">
        <button className="login-button user-button" onClick={() => handleRoleSelection('user')}>
          Log in as User
        </button>
        <p className="button-description user-description">
          Experience full access to our services for tracking calories and nutrient intake!
        </p>

        <button className="login-button expert-button" onClick={() => handleRoleSelection('expert')}>
          Log in as Expert
        </button>
        <p className="button-description expert-description">
          Support users in their nutrition journey.
        </p>

        <button className="login-button guest-button" onClick={() => handleRoleSelection('guest')}>
          Continue as Guest
        </button>
        <p className="button-description guest-description">
          Explore the basic service without saving your data. Perfect for casual browsing.
        </p>
      </div>
    </div>
  );
};

export default GeneralLoginPage;
