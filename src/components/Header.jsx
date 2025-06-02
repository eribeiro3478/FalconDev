import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, Smartphone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-electric-blue to-cobalt-blue rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-cobalt-blue bg-clip-text text-transparent">
              FalconDev
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-graphite hover:text-electric-blue transition-colors duration-200 font-medium"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-graphite hover:text-electric-blue transition-colors duration-200 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-graphite hover:text-electric-blue transition-colors duration-200 font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-graphite hover:text-electric-blue transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-2"
        >
          <div className="py-4 px-4 space-y-4">
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-graphite hover:text-electric-blue transition-colors duration-200 font-medium py-2"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left text-graphite hover:text-electric-blue transition-colors duration-200 font-medium py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="block w-full text-left text-graphite hover:text-electric-blue transition-colors duration-200 font-medium py-2"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary w-full"
            >
              Solicitar Orçamento
            </button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header; 