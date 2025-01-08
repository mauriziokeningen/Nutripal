import React from 'react';
import './PatientCard.css';

const PatientCard = ({ name, focus, image }) => {
  return (
    <div className="card-container">
    <div className="image-container">
        <img src={image} alt={name} />
    </div>
      <div className='text'>
        <h3>{name}</h3>
        <p>Focus: {focus}</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default PatientCard;
