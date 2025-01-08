import React, { useState } from 'react';
import './EmailVerificationPage2.css';
import backArrow from '../assets/arrow_left_circle_g2.png';

export const EmailVerificationPage2 = () => {
  const sampleEmail = "johnwick@gmail.com"; 
  const [code, setCode] = useState(["", "", "", ""]); 

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); 
    setCode(newCode);

    if (value && index < code.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  const handleResendCode = () => {
    alert("Email sent.");
  };

  const handleConfirm = () => {
    console.log("Code entered:", code.join("")); // Replace with actual verification logic
  };

  return (
    <section className="verify-email-page">
      <article className="verify-container">
        <h1 className="title">Verify Your Email</h1>
        <p className="subtitle">
          Please enter the 4-digit code sent to <span>{sampleEmail}</span>
        </p>
        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              className="code-input"
              type="text"
              value={digit}
              onChange={(e) => handleCodeChange(e.target.value, index)}
              maxLength="1"
            />
          ))}
        </div>
        <button className="resend-code" onClick={handleResendCode}>
          RESEND CODE
        </button>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm
        </button>
        <button className="back-button" onClick={() => console.log("Back button clicked")}>
          <img src={backArrow} alt="Back" />
        </button>
      </article>
    </section>
  );
};

export default EmailVerificationPage2;
