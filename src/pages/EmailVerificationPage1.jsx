import React from 'react';
import './EmailVerificationPage1.css'; 
import backArrow from '../assets/arrow_left_circle_g2.png';
import verifiedIcon from '../assets/verified.png';


export const EmailVerificationPage1 = () => {
  return (
    <div className="email-verification-page">
      <div className="verification-container">
            <img 
                src={verifiedIcon} 
                alt="Verified Icon" 
                className="verified-icon" 
            />
            <h1 className="verified-title">Verified!</h1>
            <p className="verified-message">
                You have successfully verified your account!
            </p>
            <button className="dashboard-button">Go to Dashboard</button>
      </div>
    </div>
  );
};

export default EmailVerificationPage1;


