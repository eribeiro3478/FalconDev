import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ShoppingBag, Info, Globe, Smartphone, Monitor } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const services = [
    {
      icon: Calendar,
      title: "Agendamentos Online",
      description: "Sistema completo para que seus clientes agendem serviços de forma automática",
      features: ["Calendário integrado", "Notificações automáticas", "Gestão de horários", "Confirmação por email"],
      color: "from-electric-blue to-cobalt-blue",
      bgColor: "from-electric-blue/5 to-cobalt-blue/10",
      borderColor: "border-electric-blue/20"
    },
    {
      icon: ShoppingBag,
      title: "Apresentação de Produtos",
      description: "Showcase profissional para destacar seus produtos e serviços de forma atrativa",
      features: ["Galeria interativa", "Catálogo digital", "Filtros inteligentes", "Integração com redes sociais"],
      color: "from-lime-green to-aqua-green",
      bgColor: "from-lime-green/5 to-aqua-green/10",
      borderColor: "border-lime-green/20"
    },
    {
      icon: Info,
      title: "Transmissão de Informações",
      description: "Comunique-se com clareza e eficiência através de design e conteúdo estratégico",
      features: ["Design responsivo", "Conteúdo otimizado", "Navegação intuitiva", "SEO integrado"],
      color: "from-deep-purple to-neon-lilac",
      bgColor: "from-deep-purple/5 to-neon-lilac/10",
      borderColor: "border-deep-purple/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="servicos" className="section-padding bg-gradient-to-br from-light-gray to-cool-gray">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Globe className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-electric-blue">
                Como Ajudamos
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite mb-6">
              Soluções completas para{' '}
              <span className="bg-gradient-to-r from-electric-blue to-deep-purple bg-clip-text text-transparent">
                seu negócio
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos três pilares fundamentais para transformar sua presença digital e conectar você aos seus clientes
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 border ${service.borderColor} bg-white/50 backdrop-blur-sm transition-all duration-300`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-graphite mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 rounded-3xl transition-opacity duration-300`}
                    whileHover={{ opacity: 0.05 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Platform Options */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-graphite mb-8">
              Desenvolvemos para todas as plataformas
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200"
              >
                <Monitor className="w-5 h-5 text-electric-blue" />
                <span className="font-medium text-graphite">Sites Responsivos</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200"
              >
                <Smartphone className="w-5 h-5 text-lime-green" />
                <span className="font-medium text-graphite">Aplicativos Mobile</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200"
              >
                <Globe className="w-5 h-5 text-deep-purple" />
                <span className="font-medium text-graphite">Sistemas Web</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 