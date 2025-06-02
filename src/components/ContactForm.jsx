import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, User, Building, Briefcase, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    service: '',
    need: '',
    description: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

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

  if (isSubmitted) {
    return (
      <section id="contato" className="section-padding bg-gradient-to-br from-light-gray to-cool-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-r from-lime-green to-aqua-green rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-3xl font-bold text-graphite mb-4">
                Mensagem enviada com sucesso!
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Recebemos sua solicitação e entraremos em contato em até 24 horas para 
                discutir seu projeto em detalhes.
              </p>
              
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-gray-700">Análise gratuita do seu caso</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-lime-green rounded-full"></div>
                  <span className="text-gray-700">Proposta personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-deep-purple rounded-full"></div>
                  <span className="text-gray-700">Cronograma detalhado</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-light-gray to-cool-gray">
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
              <Send className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-electric-blue">
                Vamos Conversar
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite mb-6">
              Pronto para transformar{' '}
              <span className="bg-gradient-to-r from-electric-blue to-deep-purple bg-clip-text text-transparent">
                sua ideia
              </span>{' '}
              em realidade?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Preencha o formulário abaixo e receba uma proposta personalizada em até 24 horas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-graphite mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-200"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div>
                    <label className="block text-sm font-semibold text-graphite mb-2">
                      Nome do Negócio *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-200"
                        placeholder="Nome da sua empresa ou negócio"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-semibold text-graphite mb-2">
                      Tipo de Serviço Oferecido
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-200"
                        placeholder="Ex: Consultoria, Produtos, Serviços..."
                      />
                    </div>
                  </div>

                  {/* Need */}
                  <div>
                    <label className="block text-sm font-semibold text-graphite mb-2">
                      O que você precisa? *
                    </label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {['Site', 'App', 'Ambos'].map((option) => (
                        <label key={option} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="need"
                            value={option}
                            onChange={handleChange}
                            required
                            className="sr-only"
                          />
                          <div className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                            formData.need === option
                              ? 'border-electric-blue bg-electric-blue text-white'
                              : 'border-gray-200 hover:border-electric-blue'
                          }`}>
                            {option}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-graphite mb-2">
                      Descreva sua ideia *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Conte-nos sobre seu projeto, objetivos e qualquer detalhe importante..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Solicitar Orçamento
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Info Side */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-graphite mb-4">
                  Por que escolher a FalconDev?
                </h3>
                <div className="space-y-3">
                  {[
                    "Resposta em até 24 horas",
                    "Orçamento gratuito e sem compromisso",
                    "Consultoria personalizada",
                    "Suporte durante todo o processo"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-green flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-gradient-to-r from-electric-blue to-cobalt-blue rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Como funciona nosso processo
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Análise", desc: "Entendemos sua necessidade" },
                    { step: "2", title: "Proposta", desc: "Criamos uma solução personalizada" },
                    { step: "3", title: "Desenvolvimento", desc: "Colocamos a mão na massa" },
                    { step: "4", title: "Entrega", desc: "Seu projeto pronto e funcionando" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm opacity-90">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-graphite mb-4">
                  Prefere falar diretamente?
                </h3>
                <p className="text-gray-600 mb-4">
                  Entre em contato pelo WhatsApp para um atendimento mais rápido
                </p>
                <motion.a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="btn-secondary w-full text-center"
                >
                  Falar no WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 