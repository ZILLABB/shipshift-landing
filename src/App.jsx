import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { VisitorTrackingProvider } from './contexts/VisitorTrackingContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import VisitorTracker from './components/ui/VisitorTracker';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import FAQPage from './pages/FAQPage';
import RoadmapPage from './pages/RoadmapPage';
import ServicesPage from './pages/ServicesPage';
import ForgotPassword from './pages/ForgotPassword';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration to prevent auto-scrolling
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Prevent any automatic scrolling on page load
    const preventAutoScroll = () => {
      window.scrollTo(0, 0);
    };

    // Only run once on initial load
    if (window.location.pathname === '/') {
      setTimeout(preventAutoScroll, 0);
    }
  }, []);

  return (
    <CurrencyProvider>
      <VisitorTrackingProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
            <Footer />
            <VisitorTracker />
          </div>
        </Router>
      </VisitorTrackingProvider>
    </CurrencyProvider>
  );
}

export default App;
