import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import PatientsPage from './pages/PatientsPage';
import { PersonalQuizPage1 } from "./pages//PersonalQuizPages/PersonalQuizPage1";
import { PersonalQuizPage2 } from "./pages//PersonalQuizPages/PersonalQuizPage2";
import { PersonalQuizPage3 } from "./pages//PersonalQuizPages/PersonalQuizPage3";
import { PersonalQuizPage4 } from "./pages//PersonalQuizPages/PersonalQuizPage4";
import { PersonalQuizPage5 } from "./pages//PersonalQuizPages/PersonalQuizPage5";
import { PersonalQuizPage6 } from "./pages//PersonalQuizPages/PersonalQuizPage6";
import { PersonalQuizPage7 } from "./pages//PersonalQuizPages/PersonalQuizPage7";
import { PersonalQuizPage8 } from "./pages//PersonalQuizPages/PersonalQuizPage8";
import { PersonalQuizPage9 } from "./pages//PersonalQuizPages/PersonalQuizPage9";
import { UserLoginPage } from './pages/UserLoginPage'; 
import { UserRegistrationPage } from './pages/UserRegistrationPage';
import { EmailVerificationPage1 } from './pages/EmailVerificationPage1';
import { EmailVerificationPage2 } from './pages/EmailVerificationPage2';
import { LoadingPage } from './pages/LoadingPage';
import { GeneralLoginPage } from './pages/GeneralLoginPage';
import CongratsPopup from './components/CongratsPopup';
import Recipes1 from './pages/Recipes1';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/recipe" element={<Recipes1 />} />
      <Route path="/page1" element={<PersonalQuizPage1 />} />
      <Route path="/page2" element={<PersonalQuizPage2 />} />
      <Route path="/page3" element={<PersonalQuizPage3 />} /> 
      <Route path="/page4" element={<PersonalQuizPage4 />} /> 
      <Route path="/page5" element={<PersonalQuizPage5 />} /> 
      <Route path="/page6" element={<PersonalQuizPage6 />} /> 
      <Route path="/page7" element={<PersonalQuizPage7 />} /> 
      <Route path="/page8" element={<PersonalQuizPage8 />} /> 
      <Route path="/page9" element={<PersonalQuizPage9 />} /> 
      <Route path="/patients" element={<PatientsPage />} />
      <Route path="/user_login" element={<UserLoginPage />} /> 
      <Route path="/user_registration" element={<UserRegistrationPage/>} /> 
      <Route path="/email_verification1" element={<EmailVerificationPage1/>} /> 
      <Route path="/email_verification2" element={<EmailVerificationPage2/>} /> 


      <Route path="/u" element={<LoadingPage/>} /> 
      <Route path="/login_page" element={<GeneralLoginPage/>} /> 
      <Route path="/congrats" element={<CongratsPopup />} /> 
    </Routes>
  </Router>
  );
}

export default App;