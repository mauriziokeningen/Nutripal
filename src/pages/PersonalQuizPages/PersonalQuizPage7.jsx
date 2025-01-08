import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PersonalQuizPage7.css';
import arrowLeftCircle from "../../assets/arrow_left_circle.png";
import progressSix from "../../assets/progress6.png";

export const PersonalQuizPage7 = () => {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState('');

  const handleButtonClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleArrowClick = () => {
    navigate("/page8"); 
  };

  return (
    <section className="personal-quiz-page-7">
      <header className="progress-container">
        <img 
          className="progress-image"
          src={progressSix}
          alt="Progress 6 of 7"
        />
        <p className="progress-text">6 of 7</p>
      </header>

        <h2 className="question-text">
          <span>How much do you <span className="highlight"> exercise</span>?</span>
        </h2>
  
       <p className="description-text">
        Select how many days per week you engage in physical activity to help us tailor your nutrition plan.
       </p>
       <section className="button-container">
            <button
                key="1"
                className="sedentary-button"
                onClick={() => handleButtonClick('Sedentary')}
                >
                Sedentary
            </button>
            <button
                key="2"
                className="lightly-active-button"
                onClick={() => handleButtonClick('Lightly Active')}
                >
                Lightly Active
            </button>
            <button
                key="3"
                className="moderately-active-button"
                onClick={() => handleButtonClick('Moderately Active')}
                >
                Moderately Active
            </button>
            <button
                key="4"
                className="very-active-button"
                onClick={() => handleButtonClick('Very Active')}
                >
                Very Active
            </button>
            <button
                key="5"
                className="extremely-active-button"
                onClick={() => handleButtonClick('Extremely Active')}
                >
                Extremely Active
            </button>
      </section>

      <button className="arrow-button" aria-label="Back" onClick={handleArrowClick}>
        <img className="arrow-left-circle" src={arrowLeftCircle} alt="Back Arrow" />
      </button>
    </section>
    
  );
};

export default PersonalQuizPage7;
