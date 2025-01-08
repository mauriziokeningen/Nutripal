import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PersonalQuizPage8.css';
import arrowLeftCircle from "../../assets/arrow_left_circle.png";
import progressSeven from "../../assets/progress7.png";
import greyTriangle from "../../assets/triangle_gray.png";

export const PersonalQuizPage8 = () => {
    const navigate = useNavigate();
    const [selectedGoal, setSelectedGoal] = useState('Weight Loss'); 

    const handleGoalClick = (goal) => {
    setSelectedGoal(goal); 
    };

    const handleArrowClick = () => {
        navigate("/page9"); 
      };
    
    return (
        <section className="personal-quiz-page-8">
        <header className="progress-container">
            <img 
            className="progress-image"
            src={progressSeven}
            alt="Progress 7 of 7"
            />
            <p className="progress-text">7 of 7</p>
        </header>
        <main className="question-text">
            <span>What are your <br /></span>
            <span className="highlight">goals</span>
            <span>?</span>
        </main>
        <p className="description-text">
            Select your primary dietary goals, such as weight loss, maintenance, or muscle gain, to customize your nutrition plan.
        </p>
        <p className='label-weightloss'>Weight Loss</p>
        <button
            className="goal-option weight-loss"
            onClick={() => handleGoalClick('Weight Loss')} 
            >
            <img src={greyTriangle} alt="Weight Loss Goal" />
        </button>
        <p className='label-buildmuscle'>Build Muscle</p>
        <button
            className="goal-option build-muscle"
            onClick={() => handleGoalClick('Build Muscle')} 
            >
            <img src={greyTriangle} alt="Build Muscle Goal" />
        </button>
        <p className='label-maintenance'>Maintenance</p>
        <button
            className="goal-option maintenance"
            onClick={() => handleGoalClick('Maintenance')} 
            >
            <img src={greyTriangle} alt="Maintenance Goal" />
        </button>

        <button className="arrow-button" aria-label="Back" onClick={handleArrowClick}>
            <img className="arrow-left-circle" src={arrowLeftCircle} alt="Back Arrow" />
        </button>
        </section>
    );
};

export default PersonalQuizPage8;
