import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-graphite to-dark-slate text-white">
      <div className="container-custom py-12">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-electric-blue to-cobalt-blue rounded-xl">
              <Code className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-lime-green bg-clip-text text-transparent">
              FalconDev
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Transformando ideias em soluções digitais que fazem a diferença para o seu negócio
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-8 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
              <span className="text-gray-300">contato@falcondev.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lime-green rounded-full"></div>
              <span className="text-gray-300">(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-deep-purple rounded-full"></div>
              <span className="text-gray-300">São Paulo, SP</span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
          >
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              Sites Responsivos
            </span>
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              Aplicativos Mobile
            </span>
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              Sistemas de Agendamento
            </span>
            <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              E-commerce
            </span>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 FalconDev. Feito com</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>para empreendedores</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-electric-blue to-cobalt-blue rounded-full hover:shadow-lg transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 