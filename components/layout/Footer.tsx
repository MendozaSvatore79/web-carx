'use client'

import React from 'react'
import Link from 'next/link'
import CarxoLogo from '../ui/CarxoLogo'

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50/80 border-t border-slate-200/80 pt-14 pb-10 px-4 sm:px-6 lg:px-8 text-slate-700">
      <div className="mx-auto max-w-7xl">
        
        {/* Grilla Principal Alineada (4 Columnas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Columna 1: Logo Estático y Bio (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <CarxoLogo size={58} showText={true} isStatic={false} animateOnHover={false} />
            </Link>
            <p className="mt-4 text-xs sm:text-sm font-medium text-slate-500 max-w-sm leading-relaxed">
              Líderes en México para la recolección, transporte y disposición controlada de residuos industriales peligrosos y de manejo especial.
            </p>
          </div>

          {/* Columna 2: Servicios (2.5 Cols -> span-3) */}
          <div className="lg:col-span-3 sm:col-span-1 pt-1">
            <h3 className="font-extrabold text-slate-950 text-sm mb-4 tracking-tight uppercase">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/servicios#transporte" className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#8A1B1B] transition-colors inline-block">
                  Transporte Especializado
                </Link>
              </li>
              <li>
                <Link href="/servicios#recoleccion" className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#8A1B1B] transition-colors inline-block">
                  Recolección Industrial
                </Link>
              </li>
              <li>
                <Link href="/servicios#confinamiento" className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#8A1B1B] transition-colors inline-block">
                  Confinamiento Controlado
                </Link>
              </li>
              <li>
                <Link href="/servicios#manifiestos" className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#8A1B1B] transition-colors inline-block">
                  Gestión de Manifiestos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Normativas (2.5 Cols -> span-2) */}
          <div className="lg:col-span-2 sm:col-span-1 pt-1">
            <h3 className="font-extrabold text-slate-950 text-sm mb-4 tracking-tight uppercase">
              Normativas
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/normativa#nom-052" className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#8A1B1B] transition-colors inline-block">
                  NOM-052-SEMARNAT
                </Link>
              </li>
              <li>
                <Link href="/normativa#sct" className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#8A1B1B] transition-colors inline-block">
                  SCT Regulaciones
                </Link>
              </li>
              <li>
                <Link href="/normativa#profepa" className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#8A1B1B] transition-colors inline-block">
                  PROFEPA Directrices
                </Link>
              </li>
              <li>
                <Link href="/normativa#iso-14001" className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#8A1B1B] transition-colors inline-block">
                  ISO 14001:2015
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto Central (3 Cols -> span-3) */}
          <div className="lg:col-span-3 sm:col-span-1 pt-1">
            <h3 className="font-extrabold text-slate-950 text-sm mb-4 tracking-tight uppercase">
              Contacto Central
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <p className="leading-relaxed">
                Av. de las Industrias 405, Parque Industrial, NL, México.
              </p>
              <p>
                <a href="mailto:contacto@carxo.com.mx" className="hover:text-slate-900 transition-colors">
                  contacto@carxo.com.mx
                </a>
              </p>
              <p className="pt-1">
                <a href="tel:8003268726" className="font-black text-[#C82323] hover:text-[#A81B1B] transition-colors text-sm sm:text-base tracking-tight inline-block">
                  800-ECO-TRANS (326-8726)
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Barra Inferior Alineada: Copyright y Legales */}
        <div className="border-t border-slate-200/80 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <p className="text-center md:text-left">
            &copy; 2026 CARXO Multiservicios S.A. de C.V. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/normativa#privacidad" className="hover:text-slate-900 transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/normativa#terminos" className="hover:text-slate-900 transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
