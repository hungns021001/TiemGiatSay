import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BookingSection from '../components/BookingSection';
import MapSection from '../components/MapSection';
import FloatingContact from '../components/FloatingContact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="app-shell theme-dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <BookingSection />
        <MapSection />
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}
