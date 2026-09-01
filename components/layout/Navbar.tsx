'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import CarxoLogo from '../ui/CarxoLogo'

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Cobertura', href: '/cobertura' },
    { name: 'Normativas', href: '/normativa' },
    { name: 'Nosotros', href: '/nosotros' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex w-full max-w-[1700px] items-center justify-between px-4 py-2 sm:px-8 sm:py-2.5 lg:px-12">
        
        {/* LADO IZQUIERDO: Logotipo SVG animado + Nombre unificado */}
        <Link
          href="/"
          className="flex items-end gap-3.5 group focus:outline-hidden shrink-0 pb-1"
          aria-label="Carxo Multiservicios Inicio"
        >
          {/* Logo animado SVG */}
          <CarxoLogo size={68} animateOnHover={true} />

          {/* Nombre y Subtítulo con tipografía homogénea */}
          <div className="flex flex-col justify-end select-none pb-0.5 leading-none">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#8A1B1B] transition-colors">
              Carxo Multiservicios
            </span>
            <span className="mt-1 text-[0.62rem] sm:text-[0.70rem] font-black uppercase tracking-[0.20em] text-[#8A1B1B]">
              Gestión de Residuos Peligrosos
            </span>
          </div>
        </Link>

        {/* CENTRO: Menú de navegación con color oficial #8A1B1B */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group/nav relative py-1.5 text-base transition-all duration-150 ease-out hover:-translate-y-1 active:translate-y-0 select-none ${
                  isActive
                    ? 'text-[#8A1B1B] font-bold'
                    : 'font-semibold text-slate-700 hover:text-[#8A1B1B]'
                }`}
              >
                <span>{link.name}</span>
                {/* Indicador inferior en rojo corporativo oficial #8A1B1B */}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] w-full rounded-full bg-[#8A1B1B] transition-all duration-150 ease-out ${
                    isActive
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-0 scale-x-50 group-hover/nav:opacity-100 group-hover/nav:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* LADO DERECHO: Teléfono y Botón de Cotización en #8A1B1B */}
        <div className="hidden items-center gap-4 md:flex shrink-0">
          <a
            href="tel:80032687267"
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-2xs hover:bg-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 ease-out"
          >
            <svg
              className="h-4 w-4 text-[#8A1B1B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Tel: 800-ECO-TRANS</span>
          </a>

          <Link
            href="/servicios#cotizar"
            className="rounded-lg bg-[#8A1B1B] px-6 py-2.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-sm hover:bg-[#701515] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-150 ease-out"
          >
            Cotizar servicio
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Abrir menú de navegación"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isMobileMenuOpen && (
        <div className="bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-red-50 text-[#8A1B1B] font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#8A1B1B]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <a
              href="tel:80032687267"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 py-2.5 text-sm font-semibold text-slate-700"
            >
              <span>Tel: 800-ECO-TRANS</span>
            </a>
            <Link
              href="/servicios#cotizar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-lg bg-[#8A1B1B] py-3 text-center text-sm font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#701515]"
            >
              Cotizar servicio
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
