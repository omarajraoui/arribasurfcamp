import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Route-level code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const LExpArribaPage = lazy(() => import('./pages/LExpArribaPage'));
const LeSurfCamp = lazy(() => import('./pages/LeSurfCamp'));
const BookNow = lazy(() => import('./pages/BookNow'));
import Navigation from './components/layout/Navigation';
import SocialSidebar from './components/ui/SocialSidebar';
import ConstructionBanner from './components/ui/ConstructionBanner';
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
  <ConstructionBanner />
  <Navigation isVisible={isNavVisible} />
  {/* Unified floating contact & social stack (replaces MobileSocialBar + SocialSidebar overlap on small screens) */}
  <SocialSidebar />
  <FloatingContactButtons />
        
        <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center text-sm text-brand-ink-soft">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lexparriba" element={<LExpArribaPage />} />
            <Route path="/surf-camp" element={<LeSurfCamp />} />
            <Route path="/le-surf-camp" element={<LeSurfCamp />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
