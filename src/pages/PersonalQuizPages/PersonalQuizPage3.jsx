import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeftCircle from "../../assets/arrow_left_circle.png";
import progressTwo from "../../assets/progress2.png";
import agenderSymbol from "../../assets/Other.png";
import female from "../../assets/Female.png";
import male from "../../assets/Male.png";
import "./PersonalQuizPage3.css";

export const PersonalQuizPage3 = () => {
  const navigate = useNavigate();
  
  const [selectedGender, setSelectedGender] = useState(null);

  const handleArrowClick = () => {
    navigate("/page4"); 
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  }; 
  return (
    <div className="personal-quiz-page-3">
      <div className="progress-container">
          <img 
            className="progress-image"
            src={progressTwo}
            alt="Progress 2 of 7"
          />
          <div className="progress-text">2 of 7</div>
      </div>

      <p className="gender-question">
        <span className="text-wrapper">What is your </span>
        <span className="gender-label">gender</span>
        <span className="text-wrapper">?</span>
      </p>
      <p className="gender-description">
        Select your gender to help us provide the most relevant nutritional
        advice and calculations.
      </p>

      {/* Button for Female selection */}
      <button 
        className="gender-button female-button"
        aria-label="Female Gender"
        onClick={() => handleGenderSelect("female")}
      >
        <img className="female-image" alt="Female" src={female} />
      </button>

      {/* Button for Male selection */}
      <button 
        className="gender-button male-button"
        aria-label="Male Gender"
        onClick={() => handleGenderSelect("male")}
      >
        <img className="male-image" alt="Male" src={male} />
      </button>

      {/* Button for Agender selection */}
      <button 
        className="gender-button agender-button"
        aria-label="Agender Gender"
        onClick={() => handleGenderSelect("agender")}
      >
        <img
          className="agender-symbol-image"
          alt="Agender symbol"
          src={agenderSymbol}
        />
      </button>

      {/* Button for the back arrow */}
      <button className="arrow-button" aria-label="Back" onClick={handleArrowClick}>
        <img className="arrow-left-circle" src={arrowLeftCircle} alt="Back Arrow" />
      </button>
    </div>
  );
};
