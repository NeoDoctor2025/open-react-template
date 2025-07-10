"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Qual é a diferença entre as modalidades de mentoria?",
    answer: "A modalidade Essentials é focada em observação e aprendizado teórico. A Experience inclui prática supervisionada e mentoria individual. Já a At Home é uma mentoria personalizada realizada em sua própria clínica."
  },
  {
    question: "Preciso ter experiência prévia em rejuvenescimento cervical?",
    answer: "Não é necessário. O método LowerLift® foi desenvolvido para cirurgiões de todos os níveis de experiência. Adaptamos o conteúdo conforme seu conhecimento atual."
  },
  {
    question: "Quanto tempo leva para ver resultados na prática?",
    answer: "A maioria dos nossos mentores reporta melhoria significativa nos resultados já nos primeiros procedimentos após a mentoria. O domínio completo da técnica vem com a prática continuada."
  },
  {
    question: "O método é aplicável em diferentes tipos de pacientes?",
    answer: "Sim, o protocolo LowerLift® foi desenvolvido para ser versátil e eficaz em diferentes tipos de pacientes, idades e graus de flacidez cervical."
  },
  {
    question: "Há suporte pós-mentoria?",
    answer: "Sim, oferecemos suporte contínuo através do nosso grupo VIP, sessões de follow-up e acesso direto aos criadores do método para esclarecimento de dúvidas."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Oferecemos diversas formas de pagamento, incluindo parcelamento. Entre em contato conosco para conhecer as condições especiais disponíveis."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Esclarecemos as principais dúvidas sobre nossas mentorias
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-800 pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-slate-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">
            Não encontrou sua pergunta?
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre as mentorias LowerLift®"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}