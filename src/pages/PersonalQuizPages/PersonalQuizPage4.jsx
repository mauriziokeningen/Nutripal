import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalQuizPage4.css";
import arrowLeftCircle from "../../assets/arrow_left_circle.png";
import progressThree from "../../assets/progress3.png";

export const PersonalQuizPage4 = () => {

const navigate = useNavigate();

const [dob, setDob] = useState("");

const handleArrowClick = () => {
    navigate("/page5"); 
  };

const handleDateChange = (event) => {
    setDob(event.target.value);
    };

  return (
    <section className="personal-quiz-page-4">
        <article className="quiz-container-4">
            <div className="progress-container">
                <img 
                    className="progress-image"
                    src={progressThree}
                    alt="Progress 2 of 7"
                />
                <div className="progress-text">2 of 7</div>
            </div>

            <h1 className="question-text">
                <span>What is your </span>
                <span className="highlight">date of birth</span>
                <span>?</span>
            </h1>

            <p className="description-text">
            Select your gender to help us provide the most relevant nutritional advice and calculations.
            </p>

            <form className="date-input-form">
                <label htmlFor="dob" className="date-label">
                    Enter your date of birth:
                </label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    onChange={handleDateChange}
                    className="date-input"
                    value={dob}
                    required
                />
            </form>

            <button className="arrow-button" aria-label="Back" onClick={handleArrowClick}>
                <img className="arrow-left-circle" src={arrowLeftCircle} alt="Back Arrow" />
            </button>
        </article>
    </section>

  );
};
