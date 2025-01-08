import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Slider, Typography, Box } from '@mui/material';
import arrowLeftCircle from "../../assets/arrow_left_circle.png";
import progressFour from "../../assets/progress4.png";
import "./PersonalQuizPage5.css";

export const PersonalQuizPage5 = () => {
  const navigate = useNavigate();

  const [height, setHeight] = useState(170); 

  const handleSliderChange = (event, newValue) => {
    setHeight(newValue);
  };
  const handleArrowClick = () => {
    navigate("/page6"); 
  };
  return (

    <section className="personal-quiz-page-5">
        <div className="progress-container">
                <img 
                    className="progress-image"
                    src={progressFour}
                    alt="Progress 4 of 7"
                />
                <div className="progress-text">4 of 7</div>
            </div>
    
    <h2 className="question-text">
        <span>How<span className="highlight"> tall</span> are you?</span>
    </h2>

    <p className="description-text">
      Please provide your height to accurately assess your health metrics.
    </p>

        <div className="slider-container" >
        <Typography className="height-label">Height (cm)</Typography>
        <Slider
            value={height}
            onChange={handleSliderChange}
            aria-labelledby="height-slider"
            min={50} 
            max={250} 
            step={1}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value} cm`}
            sx={{
                width: '100%',
                height: 20, 
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
        <Typography className="selected-height">{`Selected Height: ${height} cm`}</Typography>
        </div>

      <button className="arrow-button" aria-label="Back" onClick={handleArrowClick}>
        <img className="arrow-left-circle" src={arrowLeftCircle} alt="Back Arrow" />
      </button>

    </section>
  );
};


