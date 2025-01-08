import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./UserLoginPage.css";

export const UserLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); 
  };

  const handleLoginClick = () => {
    navigate('/email_verification2');  //later this will be changed
  };

  const handleRegisterClick = () => {
    navigate('/user_registration');  
  };

  return (
    <main className="user-login-container">
      {/* Title Section */}
      <section className="title-container">
        <h1 className="main-title">Welcome Back!</h1>
        <p className="subtitle">Ready to Fuel Your Goals?</p>
      </section>

      {/* Input Section */}
      <section className="input-section">
        <input 
          id="username" 
          type="text" 
          placeholder="Username" 
          className="input-field" 
          value={username} 
          onChange={handleUsernameChange}
        />

        <input 
          id="password" 
          type="password" 
          placeholder="Password" 
          className="input-field"
          value={password}  
          onChange={handlePasswordChange}  
        />

        <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
      </section>

      {/* Action Buttons */}
      <section className="button-section">
        <button className="login-button" onClick={handleLoginClick}>Log In</button>
        <button className="register-button" onClick={handleRegisterClick}>Register</button>
        <p>First time here? Create your account!</p>
        </section>
    </main>
  );
};

export default UserLoginPage;
