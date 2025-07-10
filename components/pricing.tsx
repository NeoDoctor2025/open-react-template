"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Essentials",
    price: "R$ 6.900",
    duration: "3 dias",
    description: "Observação direta",
    features: [
      "Observação de procedimentos ao vivo",
      "Discussão de casos clínicos",
      "Material didático exclusivo",
      "Certificado de participação",
      "Acesso ao grupo VIP por 30 dias"
    ],
    popular: false
  },
  {
    name: "Experience",
    price: "R$ 11.900",
    duration: "5 dias",
    description: "Imersão completa",
    features: [
      "Tudo do pacote Essentials",
      "Prática supervisionada",
      "Análise de casos pessoais",
      "Mentoria individual",
      "Acesso ao grupo VIP por 90 dias",
      "1 sessão de follow-up online"
    ],
    popular: true
  },
  {
    name: "At Home",
    price: "R$ 49.900",
    duration: "Personalizado",
    description: "Mentoria in loco",
    features: [
      "Mentoria personalizada em sua clínica",
      "Treinamento da equipe",
      "Análise completa do setup",
      "Protocolos customizados",
      "Suporte por 6 meses",
      "Certificação da clínica"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-slate-50" id="packages">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Modalidades de Mentoria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Escolha a modalidade que melhor se adapta ao seu perfil e objetivos profissionais
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                pkg.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                <p className="text-slate-600">{pkg.duration} • {pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transform hover:scale-105'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
                onClick={() => {
                  window.open(
                    `https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o pacote ${pkg.name} - ${pkg.price}`,
                    '_blank'
                  );
                }}
              >
                Solicitar Informações
              </button>
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
            Dúvidas sobre qual modalidade escolher?
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de uma consultoria para escolher a melhor modalidade de mentoria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Falar com Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}