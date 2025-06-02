import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Palette, Smartphone, RefreshCw, Shield, Clock, Star, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const benefits = [
    {
      icon: Zap,
      title: "Rápido",
      description: "Desenvolvimento ágil com entrega no menor tempo possível",
      color: "from-electric-blue to-cobalt-blue"
    },
    {
      icon: Palette,
      title: "Personalizado",
      description: "Cada projeto é único e feito especialmente para você",
      color: "from-lime-green to-aqua-green"
    },
    {
      icon: Smartphone,
      title: "Responsivo",
      description: "Perfeito em todos os dispositivos - celular, tablet e desktop",
      color: "from-deep-purple to-neon-lilac"
    },
    {
      icon: RefreshCw,
      title: "Fácil de Atualizar",
      description: "Interface simples para você mesmo fazer atualizações",
      color: "from-electric-blue to-lime-green"
    }
  ];

  const stats = [
    { number: "100%", label: "Satisfação dos Clientes", icon: Star },
    { number: "48h", label: "Resposta Máxima", icon: Clock },
    { number: "24/7", label: "Suporte Disponível", icon: Shield },
    { number: "300%", label: "Aumento Médio em Conversões", icon: TrendingUp }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-blue/10 to-cobalt-blue/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-electric-blue">
                Benefícios
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite mb-6">
              Por que somos a{' '}
              <span className="bg-gradient-to-r from-electric-blue to-deep-purple bg-clip-text text-transparent">
                melhor escolha
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Combinamos velocidade, qualidade e inovação para entregar exatamente o que seu negócio precisa
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)"
                  }}
                  className="text-center group cursor-pointer"
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-graphite mb-3 group-hover:text-electric-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover Line */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${benefit.color} rounded-full mt-4 mx-auto`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-graphite to-dark-slate rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Números que comprovam nossa qualidade
              </h3>
              <p className="text-gray-300 text-lg">
                Resultados reais de clientes satisfeitos
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      className="w-12 h-12 bg-gradient-to-r from-electric-blue to-lime-green rounded-lg flex items-center justify-center mb-4 mx-auto"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-lime-green transition-colors duration-300">
                      {stat.number}
                    </div>
                    
                    <div className="text-gray-300 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Additional Benefits */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-graphite mb-8">
              E ainda tem mais...
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "Consultoria gratuita para definir a melhor solução",
                "Treinamento completo para uso da plataforma",
                "Manutenção e atualizações por 6 meses",
                "Otimização para motores de busca (SEO)",
                "Integração com redes sociais e WhatsApp",
                "Relatórios de performance e analytics"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 text-left bg-gradient-to-r from-electric-blue/5 to-lime-green/5 rounded-lg p-4 border border-electric-blue/10"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-electric-blue to-lime-green rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 