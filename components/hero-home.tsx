"use client";

import { motion } from "framer-motion";

export default function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 -z-5"></div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-20 md:py-32 relative z-10">
          {/* Section header */}
          <div className="pb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                LowerLift® Experience by Deep Neck Academy
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pb-5 font-nacelle text-4xl font-bold text-white md:text-6xl lg:text-7xl leading-tight"
            >
              Domine a Arte do<br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Rejuvenescimento Cervical Profundo
              </span>
            </motion.h1>
            
            <div className="mx-auto max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8 text-xl text-slate-200 leading-relaxed"
              >
                Mentoria Exclusiva com os Criadores do Método LowerLift®
              </motion.p>
              
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl sm:mb-0 sm:w-auto"
                    href="#packages"
                  >
                    <span className="relative inline-flex items-center">
                      Conhecer Modalidades de Mentoria
                      <span className="ml-2 tracking-normal text-white/80 transition-transform group-hover:translate-x-1">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <a
                    className="btn relative w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300 sm:ml-4 sm:w-auto"
                    href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as mentorias LowerLift®"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
