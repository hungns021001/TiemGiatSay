import { useState } from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app-shell theme-dark">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main>
        <HeroSection />
        <FeatureSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <BookingSection />
        <MapSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
