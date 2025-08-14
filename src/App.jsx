import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LExpArribaPage from './pages/LExpArribaPage';
import LeSurfCamp from './pages/LeSurfCamp';
import BookNow from './pages/BookNow';
import Navigation from './components/layout/Navigation';
import SocialSidebar from './components/ui/SocialSidebar';
import FloatingContactButtons from './components/ui/FloatingContactButtons';
import useNavbarVisibility from './hooks/useNavbarVisibility';
import './i18n';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  // Show navbar after a small scroll (approx 40px) instead of deep hero scroll
  const isNavVisible = useNavbarVisibility(40);

  return (
    <Router>
      <div className="App w-full min-h-screen">
        <Navigation isVisible={isNavVisible} />
        <SocialSidebar />
        <FloatingContactButtons />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lexparriba" element={<LExpArribaPage />} />
          <Route path="/le-surf-camp" element={<LeSurfCamp />} />
          <Route path="/book-now" element={<BookNow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
