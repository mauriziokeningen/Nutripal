import React, { useState } from "react";
import "./UserRegistrationPage.css";
import greenBg from '../assets/green_bg.png';
import backArrow from '../assets/arrow_left_circle_white.png';

export const UserRegistrationPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
    
        const userData = {
          username,
          email,
          password
        };

    };
   return (
    <main className="user-registration-container">
      
      <section className="top-section">
        <img
          src={backArrow} 
          alt="Back"
          className="back-button"
        />
        <img
          src={greenBg} 
          alt="Green Background"
          className="green-bg"
        />
       
      </section>

        <h1 className="main-title">Create Account</h1>

      <section className="input-section">
        <label className="input-label" htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        
        <label className="input-label" htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        
        <label className="input-label" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <label className="input-label" htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="input-field"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />

        <div className="terms-conditions">
            <input 
                type="checkbox" 
                id="terms" 
                className="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)} 
            />
            <label htmlFor="terms">Terms and Conditions</label>
        </div>
      </section>

      <section className="register-section">
        <button className="register-button">Register</button>
      </section>
    </main>
  );
};

export default UserRegistrationPage;
