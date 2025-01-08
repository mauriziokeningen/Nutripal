import React from "react";
import "./CongratsPopup.css"; 
import trophyImg from "../assets/trophy.png";

export const CongratsPopup = ({ onClose }) => {
    return (
        <section className="popup-container">
        <div className="circle">
          <img src={trophyImg} alt="Trophy" className="trophy-img" />
        </div>
        <h2>All Done!</h2>
        <p className="subtitle">You have completed your health goals for today. Great Job!</p>
        <button className="ok-button" onClick={onClose}>
          Ok, thanks 💪
        </button>
      </section>
    );
  };

export default CongratsPopup;

