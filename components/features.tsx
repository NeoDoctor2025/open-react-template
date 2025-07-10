"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative py-16 md:py-24 bg-white" id="method">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 pb-3"
            >
              <span className="inline-flex bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-semibold">
                Método LowerLift®
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="pb-4 font-nacelle text-3xl font-bold text-slate-800 md:text-4xl"
            >
              Os 3 Pilares da Excelência Cervical
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600"
            >
              Uma metodologia revolucionária desenvolvida ao longo de 15 anos e mais de 2000 procedimentos
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center pb-4 md:pb-12"
          >
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Método LowerLift"
            />
          </motion.div>
          
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-1 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <svg
                className="mb-6 fill-blue-600 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
              >
                <path d="M24 4C15.163 4 8 11.163 8 20s7.163 16 16 16 16-7.163 16-16S32.837 4 24 4zm0 28c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z"/>
                <path d="M24 12c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
              </svg>
              <h3 className="mb-4 font-nacelle text-xl font-bold text-slate-800">
                1. Anatomia Profunda
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Domínio completo de estruturas anatômicas negligenciadas pelas técnicas convencionais
              </p>
            </motion.article>
            
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <svg
                className="mb-6 fill-blue-600 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
              >
                <path d="M40 8H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zM8 12h32v24H8V12z"/>
                <path d="M16 20h16v4H16zm0 8h12v4H16z"/>
              </svg>
              <h3 className="mb-4 font-nacelle text-xl font-bold text-slate-800">
                2. Protocolo Refinado
              </h3>
              <p className="text-slate-600 leading-relaxed">
                15 anos de experiência e mais de 2000 procedimentos condensados em um protocolo único
              </p>
            </motion.article>
            
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <svg
                className="mb-6 fill-blue-600 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
              >
                <path d="M24 4l-8 8 8 8 8-8-8-8zm0 12.586L17.414 12 24 5.414 30.586 12 24 16.586z"/>
                <path d="M40 20c0-8.837-7.163-16-16-16S8 11.163 8 20s7.163 16 16 16 16-7.163 16-16zm-28 0c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z"/>
              </svg>
              <h3 className="mb-4 font-nacelle text-xl font-bold text-slate-800">
                3. Resultados Duradouros
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Satisfação que transcende expectativas com resultados que perduram ao longo do tempo
              </p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
