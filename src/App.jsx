import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import FeatureCards from './components/FeatureCards';
import TrustedBy from './components/TrustedBy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChoose />
      <FeatureCards />
      <TrustedBy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
