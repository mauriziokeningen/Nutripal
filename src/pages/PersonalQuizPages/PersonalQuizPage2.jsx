import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeftCircle from "../../assets/arrow_left_circle.png";
import progressOne from "../../assets/progress1.png";
import "./PersonalQuizPage2.css";

export const PersonalQuizPage2 = () => {
    const navigate = useNavigate();

    const handleArrowClick = () => {
      navigate("/page3"); 
    };

    const [name, setName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value); 
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
         
          console.log("Name submitted:", name);  
          
        }
      };

      return (
        <div className="personal-quiz-page-2">
          <div className="quiz-container-2">
            <div className="progress-container">
              <div className="progress-text">1 of 7</div>
              <img className="progress-one" src={progressOne} alt="Progress One Icon" />
            </div>
    
            <p className="quiz-title-2">
              <span className="text-wrapper">What is your </span>
              <span className="name-label">name</span>
              <span className="text-wrapper">?</span>
            </p>
    
            <p className="instruction-text">
              Please enter your first name to personalize your experience!
            </p>
    
            <div className="name-input-container">
              <input 
                type="text" 
                value={name} 
                onChange={handleNameChange} 
                onKeyDown={handleKeyPress}
                placeholder="Enter your name"
                className="name-input" 
              />
            </div>
    
            <button className="arrow-button" aria-label="Back" onClick={handleArrowClick}>
              <img className="arrow-left-circle" src={arrowLeftCircle} alt="Back Arrow" />
            </button>
          </div>
        </div>
      );
    };
