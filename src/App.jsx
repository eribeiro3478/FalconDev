import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light-gray">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Benefits />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App; 