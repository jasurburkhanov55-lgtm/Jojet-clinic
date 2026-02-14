import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PatientPortal from './pages/PatientPortal';
import Pricing from './pages/Pricing';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="font-display text-4xl md:text-6xl text-gold mb-4 animate-pulse">
            Dr. Jasurjon Burkhanov
          </div>
          <div className="w-32 h-0.5 bg-gold mx-auto shimmer"></div>
          <p className="mt-4 text-gray-500 font-body tracking-widest uppercase text-sm">
            Elite Plastic Surgery
          </p>
        </div>
      </div>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:category" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portal" element={<PatientPortal />} />
              <Route path="/portal/:section" element={<PatientPortal />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
