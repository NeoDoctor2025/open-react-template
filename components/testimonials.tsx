"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Dr. Carlos Mendes",
    company: "Cirurgião Plástico - SP",
    content:
      "O método LowerLift® revolucionou minha prática. Os resultados são incomparáveis e a satisfação dos pacientes aumentou significativamente. Recomendo a todos os colegas.",
  },
  {
    img: TestimonialImg02,
    name: "Dra. Ana Silva",
    company: "Cirurgiã Plástica - RJ",
    content:
      "A mentoria foi transformadora. Aprendi técnicas que não encontro em lugar nenhum. Meus resultados cervicais nunca foram tão duradouros e naturais.",
  },
  {
    img: TestimonialImg03,
    name: "Dr. Roberto Lima",
    company: "Cirurgião Plástico - MG",
    content:
      "Participei da modalidade Experience e foi a melhor decisão da minha carreira. O protocolo é detalhado e os resultados falam por si só.",
  },
  {
    img: TestimonialImg04,
    name: "Dr. Fernando Costa",
    company: "Cirurgião Plástico - RS",
    content:
      "A anatomia profunda que aprendi mudou completamente minha abordagem. Agora tenho confiança para casos que antes evitava.",
  },
  {
    img: TestimonialImg05,
    name: "Dra. Patricia Oliveira",
    company: "Cirurgiã Plástica - PR",
    content:
      "O investimento se pagou rapidamente. Meus pacientes notaram a diferença imediatamente e as indicações aumentaram 300%.",
  },
  {
    img: TestimonialImg06,
    name: "Dr. João Santos",
    company: "Cirurgião Plástico - BA",
    content:
      "A mentoria At Home foi excepcional. Toda minha equipe foi treinada e agora oferecemos um serviço diferenciado.",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pb-4 font-nacelle text-3xl font-bold text-slate-800 md:text-4xl"
          >
            O que dizem nossos mentores
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Depoimentos reais de cirurgiões que transformaram sua prática com o método LowerLift®
          </motion.p>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <Testimonial testimonial={testimonial}>
                      {testimonial.content}
                    </Testimonial>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Testimonial({
  testimonial,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    company: string;
    content: string;
  };
  children: React.ReactNode;
}) {
  return (
    <article
      className="relative rounded-2xl bg-slate-50 p-8 text-center"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full"
            src={testimonial.img}
            width={64}
            height={64}
            alt={testimonial.name}
          />
          <div className="text-left">
            <div className="font-semibold text-slate-800">{testimonial.name}</div>
            <div className="text-slate-600 text-sm">{testimonial.company}</div>
          </div>
        </div>
        
        <p className="text-lg text-slate-700 leading-relaxed before:content-['"'] after:content-['"'] max-w-3xl">
          {children}
        </p>
        
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </article>
  );
}
