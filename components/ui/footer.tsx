import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(3,minmax(0,200px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white">Mentorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="#packages"
                >
                  Essentials
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="#packages"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="#packages"
                >
                  At Home
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white">Método</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="#method"
                >
                  Anatomia Profunda
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="#method"
                >
                  Protocolo Refinado
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="#method"
                >
                  Resultados Duradouros
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="https://wa.me/5511999999999"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="mailto:contato@deepneckacademy.com"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="tel:+5511999999999"
                >
                  Telefone
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
              <span className="ml-3 text-lg font-semibold text-white">Deep Neck Academy</span>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-slate-400">
                © 2024 Deep Neck Academy
                <span className="text-slate-600"> · </span>
                <a
                  className="text-slate-400 transition hover:text-blue-400"
                  href="#0"
                >
                  Termos de Uso
                </a>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-blue-400 transition hover:text-blue-300"
                    href="#0"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
                      <circle cx="24.3" cy="7.7" r="1.9"/>
                      <path d="M16 2.9c-3.5 0-3.9 0-5.3.1-1.4.1-2.4.2-3.2.5-.9.3-1.6.8-2.4 1.6-.8.8-1.3 1.5-1.6 2.4-.3.8-.4 1.8-.5 3.2-.1 1.4-.1 1.8-.1 5.3s0 3.9.1 5.3c.1 1.4.2 2.4.5 3.2.3.9.8 1.6 1.6 2.4.8.8 1.5 1.3 2.4 1.6.8.3 1.8.4 3.2.5 1.4.1 1.8.1 5.3.1s3.9 0 5.3-.1c1.4-.1 2.4-.2 3.2-.5.9-.3 1.6-.8 2.4-1.6.8-.8 1.3-1.5 1.6-2.4.3-.8.4-1.8.5-3.2.1-1.4.1-1.8.1-5.3s0-3.9-.1-5.3c-.1-1.4-.2-2.4-.5-3.2-.3-.9-.8-1.6-1.6-2.4-.8-.8-1.5-1.3-2.4-1.6-.8-.3-1.8-.4-3.2-.5-1.4-.1-1.8-.1-5.3-.1zm0 2.2c3.4 0 3.8 0 5.1.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 5.1s0 3.8-.1 5.1c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-5.1.1s-3.8 0-5.1-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1.1-.4-2.3-.1-1.3-.1-1.7-.1-5.1s0-3.8.1-5.1c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.3 2.3-.4 1.3-.1 1.7-.1 5.1-.1z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-blue-400 transition hover:text-blue-300"
                    href="#0"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
