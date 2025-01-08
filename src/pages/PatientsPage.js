import React from 'react';
import './PatientsPage.css';
import Header from '../components/Header';
import PatientCard from '../components/PatientCard';
import Navbar from '../components/Navbar';
import johnWick from '../assets/WhatsApp Image 2024-10-28 at 10.13.55_337de7ee 3.png';
import rervess from '../assets/image 10.png'
import ben from '../assets/image 9.png'


const PatientsPage = () => {
  return (
    <div className="patient-page">
      <Header />
      <PatientCard
        name="John Wick"
        focus="Build Muscle"
        image={johnWick}
      />
      <PatientCard
        name="Keanu Reeves"
        focus="Weight Loss"
        image={rervess}
      />
      <PatientCard
        name="Ben Affleck"
        focus="Maintenance"
        image={ben}
      />
      <Navbar />
    </div>
  );
};

export default PatientsPage;
