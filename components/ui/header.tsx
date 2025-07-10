"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-3 w-full md:mt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/95 px-3 shadow-lg backdrop-blur-sm border border-slate-200">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
            <span className="ml-3 text-lg font-semibold text-slate-800">Deep Neck Academy</span>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-slate-100 hover:bg-slate-200 py-[5px] text-slate-700 border border-slate-300 transition-colors"
              >
                Entrar
              </Link>
            </li>
            <li>
              <Link
                href="#packages"
                className="btn-sm bg-gradient-to-r from-blue-600 to-blue-500 py-[5px] text-white hover:from-blue-700 hover:to-blue-600 transition-all"
              >
                Mentorias
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
