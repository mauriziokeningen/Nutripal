import React from "react";
import { useNavigate } from "react-router-dom"; 
import arrowRight from "../../assets/arrow_right.png";
import verticalLogo from "../../assets/vertical_logo.png";
import "./PersonalQuizPage1.css";


export const PersonalQuizPage1 = () => {
    const navigate = useNavigate();

    const handleArrowClick = () => {
        navigate("/page2");
      };

     return (
        <div className="personal-quiz-page">
            <div className="quiz-container">
                <header className="quiz-header">
                <h1 className="quiz-title">
                    Let’s Create Your Customized Nutrition Profile!
                </h1>

                <img
                    className="logo"
                    alt="Simple healthy food"
                    src={verticalLogo}
                />
                </header>

                <footer className="quiz-footer">
                <p className="cta-text">Let’s go!</p>

                <img
                    className="arrow-icon"
                    alt="Arrow icon"
                    src={arrowRight}  
                    onClick={handleArrowClick} 
                />
                </footer>
            </div>
        </div>

  );
};
