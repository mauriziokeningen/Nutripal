import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Slider, Typography, Box } from '@mui/material';
import "./PersonalQuizPage6.css"; 
import arrowLeftCircle from "../../assets/arrow_left_circle.png";
import progressFour from "../../assets/progress4.png";

export const PersonalQuizPage6 = () => {
    const navigate = useNavigate();

    const [weight, setWeight] = useState(70); 
  
    const handleSliderChange = (event, newValue) => {
      setWeight(newValue);
    };

    const handleArrowClick = () => {
      navigate("/page7"); 
    };
  
    return (
      <section className="personal-quiz-page-6">
        <div className="progress-container">
                <img 
                    className="progress-image"
                    src={progressFour}
                    alt="Progress 5 of 7"
                />
                <div className="progress-text">5 of 7</div>
            </div>
        <h2 className="question-text">
          <span>What is your<span className="highlight"> weight</span>?</span>
        </h2>
  
        <p className="description-text">
          Please provide your weight to accurately assess your health metrics.
        </p>
  
        <div className="slider-container">
          <Typography className="weight-label">Weight (kg)</Typography>
          <Slider
            value={weight}
            onChange={handleSliderChange}
            aria-labelledby="weight-slider"
            min={30}
            max={200}
            step={1}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value} kg`}
            orientation="vertical"
            sx={{
              height: 350,
              width: 20,
              color: '#87bf56',
              '& .MuiSlider-rail': {
                backgroundColor: '#87bf56',
              },
              '& .MuiSlider-track': {
                backgroundColor: '#87bf56',
              },
              '& .MuiSlider-thumb': {
                backgroundColor: '#87bf56',
              },
            }}
          />
          <Typography className="selected-weight">{`Selected Weight: ${weight} kg`}</Typography>
        </div>

        <button className="arrow-button" aria-label="Back" onClick={handleArrowClick}>
            <img className="arrow-left-circle" src={arrowLeftCircle} alt="Back Arrow" />
      </button>
      </section>
    );
  };
  