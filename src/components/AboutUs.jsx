import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Heart, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-blue/10 to-cobalt-blue/10 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-electric-blue">
                Quem Somos
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite mb-6">
              Desenvolvemos soluções que fazem a{' '}
              <span className="bg-gradient-to-r from-electric-blue to-deep-purple bg-clip-text text-transparent">
                diferença
              </span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Somos especialistas em criar <strong className="text-electric-blue">sites e aplicativos funcionais</strong> que 
              realmente conectam seu negócio aos seus clientes. Nossa missão é transformar suas ideias em 
              soluções digitais poderosas.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Com foco em <strong className="text-lime-green">agendamentos online</strong>, 
              <strong className="text-deep-purple"> apresentação de produtos</strong> e 
              <strong className="text-electric-blue"> transmissão clara de informações</strong>, 
              entregamos exatamente o que seu negócio precisa para crescer.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid sm:grid-cols-3 gap-8 mb-12"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-electric-blue/5 to-cobalt-blue/10 rounded-2xl p-6 border border-electric-blue/20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-cobalt-blue rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-graphite mb-2">Tecnologia Avançada</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos as melhores ferramentas e práticas do mercado
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-lime-green/5 to-aqua-green/10 rounded-2xl p-6 border border-lime-green/20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-lime-green to-aqua-green rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-graphite mb-2">Entrega Rápida</h3>
              <p className="text-gray-600 text-sm">
                Seus projetos prontos no menor tempo possível
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-deep-purple/5 to-neon-lilac/10 rounded-2xl p-6 border border-deep-purple/20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-deep-purple to-neon-lilac rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-graphite mb-2">100% Personalizado</h3>
              <p className="text-gray-600 text-sm">
                Cada projeto é único e feito especialmente para você
              </p>
            </motion.div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-graphite mb-8">
              Por que escolher a FalconDev?
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              {[
                "Entendemos a dor do empreendedor que precisa estar online",
                "Focamos em soluções práticas que geram resultados reais",
                "Desenvolvimento ágil sem comprometer a qualidade",
                "Suporte completo durante e após a entrega do projeto"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-lime-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 