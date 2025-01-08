import React from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalQuizPage9.css";
import verticalLogo from "../../assets/vertical_logo.png";
import hoorayImage from "../../assets/hooray.png"; 
import arrowRight from "../../assets/arrow_right.png";

export const PersonalQuizPage9 = () => {

  return (
    <div className="personal-quiz-page-9">
     
      <img src={verticalLogo} alt="Logo" className="logo-image" />
      
      
      <img src={hoorayImage} alt="Random" className="hooray-image" />

      <p className="description">
            Let's get started on achieving your health goals!
      </p>

      <button className="started-button">
        I'm Ready!
        <img src={arrowRight} alt="Button Icon" className="button-icon" />
      </button>
        
    </div>
  );
};

export default PersonalQuizPage9;
