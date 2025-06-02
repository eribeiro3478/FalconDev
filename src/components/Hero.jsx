import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-gray via-cool-gray to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cobalt-blue"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0] 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-electric-blue to-cobalt-blue rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0] 
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-lime-green to-aqua-green rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            rotate: [0, 360] 
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-1/4 w-8 h-8 bg-gradient-to-r from-deep-purple to-neon-lilac rounded-full opacity-20"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium text-graphite">
              Desenvolvimento Profissional
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-graphite mb-6 leading-tight"
          >
            Seu negócio merece estar{' '}
            <span className="bg-gradient-to-r from-electric-blue via-cobalt-blue to-deep-purple bg-clip-text text-transparent">
              online
            </span>{' '}
            com qualidade
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Sites e aplicativos sob medida, com entrega rápida e foco total na sua necessidade.
            <br />
            <span className="text-electric-blue font-semibold">Transforme sua ideia em realidade.</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2">
              <Zap className="w-5 h-5 text-lime-green" />
              <span className="text-sm font-medium text-graphite">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users className="w-5 h-5 text-electric-blue" />
              <span className="text-sm font-medium text-graphite">100% Personalizado</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2">
              <Sparkles className="w-5 h-5 text-deep-purple" />
              <span className="text-sm font-medium text-graphite">Suporte Completo</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 text-lg px-8 py-4 shadow-2xl"
            >
              Quero meu site/app
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-electric-blue font-semibold py-4 px-8 rounded-full border-2 border-electric-blue transition-all duration-300 hover:bg-electric-blue hover:text-white shadow-lg"
            >
              Ver nossos serviços
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
          >
            <span className="text-sm text-graphite">Confiado por empreendedores de todo o Brasil</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-electric-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 