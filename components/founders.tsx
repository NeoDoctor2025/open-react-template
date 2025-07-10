"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";

const founders = [
  {
    name: "Dr. Alexandre Mendonça",
    title: "Criador do Método LowerLift®",
    image: TestimonialImg01,
    bio: "Cirurgião plástico com mais de 20 anos de experiência, especialista em rejuvenescimento facial. Desenvolveu o método LowerLift® após 15 anos de pesquisa e mais de 2000 procedimentos realizados.",
    credentials: [
      "Membro da SBCP",
      "Fellowship em Cirurgia Facial",
      "Professor convidado em congressos internacionais",
      "Autor de artigos científicos sobre rejuvenescimento cervical"
    ]
  },
  {
    name: "Dr. Ricardo Silva",
    title: "Co-fundador Deep Neck Academy",
    image: TestimonialImg02,
    bio: "Especialista em anatomia cervical profunda e técnicas minimamente invasivas. Responsável pelo desenvolvimento dos protocolos de ensino e pela formação de novos mentores.",
    credentials: [
      "PhD em Anatomia Aplicada",
      "Especialista em Cirurgia Plástica",
      "Coordenador de cursos de especialização",
      "Consultor em técnicas avançadas de rejuvenescimento"
    ]
  }
];

export default function Founders() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Conheça os Criadores
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Os pioneiros do método LowerLift® que revolucionaram o rejuvenescimento cervical
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={120}
                  height={120}
                  className="rounded-full mb-4"
                />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {founder.title}
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {founder.bio}
              </p>

              <div>
                <h4 className="font-semibold text-slate-800 mb-3">
                  Credenciais:
                </h4>
                <ul className="space-y-2">
                  {founder.credentials.map((credential, credIndex) => (
                    <li key={credIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
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
                      <span className="text-slate-600">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Deep Neck Academy
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Fundada em 2020, a Deep Neck Academy é a primeira instituição especializada 
              exclusivamente em técnicas avançadas de rejuvenescimento cervical profundo. 
              Nossa missão é elevar o padrão da cirurgia plástica através do ensino de 
              técnicas inovadoras e protocolos refinados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}