import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingPage.css'; 
import verticalLogo from '../assets/vertical_logo_text.png';

export const LoadingPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/login_page'); 
        }, 5000); 
    
        return () => clearTimeout(timer);
      }, [navigate]);

  return (
    <div className="loading-page">
      <img src={verticalLogo} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingPage;

