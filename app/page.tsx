'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import ClientsBar from '../components/sections/ClientsBar'
import ServicesSection from '../components/sections/ServicesSection'
import StatsSection from '../components/sections/StatsSection'
import CoverageMapSection from '../components/sections/CoverageMapSection'
import IndustralClients from '../components/sections/IndustrialClients'
import ContactFormSection from '../components/sections/ContactFormSection'
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = containerRef.current?.querySelector('video')
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.play().catch(() => {})
  }, [])

  const corporatePillars = [
    {
      title: 'Servicios Especializados (REPSE)',
      desc: 'Empresa registrada ante la STPS para servicios industriales y transporte.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Transporte Federal Autorizado',
      desc: 'Manejo y traslado seguro de residuos y remanentes peligrosos.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Remediación y Caracterización',
      desc: 'Celdas de almacenamiento y muestreo de suelos contaminados.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* ========================================================
          1. HERO BANNER PRINCIPAL CON VIDEO DE FONDO
          ======================================================== */}
      <section className="relative min-h-[calc(100vh-76px)] w-full flex flex-col justify-between items-center overflow-hidden py-12 sm:py-16">
        
        {/* Video de fondo natural integrado con atributos nativos para Safari */}
        <div 
          ref={containerRef}
          className="absolute inset-0 z-0 h-full w-full overflow-hidden"
          dangerouslySetInnerHTML={{
            __html: `
              <video
                autoplay
                loop
                muted
                playsinline
                webkit-playsinline
                preload="auto"
                class="h-full w-full object-cover"
              >
                <source src="/banner.mp4" type="video/mp4" />
              </video>
            `,
          }}
        />
        
        {/* Velo de luz natural continua */}
        <div className="absolute inset-0 bg-white/40" />
        
        {/* Degradado vertical sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/70" />

        {/* Contenido Central */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center flex flex-col items-center my-auto">
          
          {/* Etiqueta superior */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-slate-800 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#8A1B1B]" />
            Seguridad & Cumplimiento Normativo
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.15] max-w-4xl">
            Logística y Gestión de{' '}
            <span className="text-[#8A1B1B]">Residuos Peligrosos</span>{' '}
            con Seguridad Absoluta
          </h1>

          {/* Párrafo descriptivo */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg font-semibold text-slate-700 leading-relaxed">
            Garantizamos el transporte, confinamiento y asesoría ambiental de materiales peligrosos bajo estrictas normativas vigentes en México. Protegemos su industria, blindamos su responsabilidad legal.
          </p>

          {/* Botones de acción */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
            <Link
              href="/servicios#cotizar"
              className="w-full sm:w-auto rounded-md bg-[#8A1B1B] px-8 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-sm hover:bg-[#701515] active:scale-95 transition-all"
            >
              Solicitar cotización
            </Link>
            
            <Link
              href="/servicios"
              className="w-full sm:w-auto rounded-md border border-slate-400 bg-white/90 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-900 hover:text-white active:scale-95 transition-all shadow-2xs"
            >
              Conocer servicios
            </Link>
          </div>

        </div>

        {/* Barra de Pilares de Servicio Inferior */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 w-full mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-xl border border-slate-200/90 bg-white/90 backdrop-blur-md p-5 sm:p-6 shadow-xs">
            {corporatePillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-3.5 justify-start">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
                  {pillar.icon}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-slate-900 leading-tight">
                    {pillar.title}
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-normal mt-1">
                    {pillar.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ========================================================
          2. BARRA DE CLIENTES CORPORATIVOS DE MÉXICO
          ======================================================== */}
      <ClientsBar />

      {/* ========================================================
          3. SECCIÓN: SOLUCIONES INTEGRALES (PORTAFOLIO CORPORATIVO)
          ======================================================== */}
      <ServicesSection />

      {/* ========================================================
          4. SECCIÓN: TRAYECTORIA Y CONTADORES NUMÉRICOS ANIMADOS
          ======================================================== */}
      <StatsSection />

      {/* ========================================================
          5. SECCIÓN: MAPA INTERACTIVO DE COBERTURA Y RUTAS NACIONALES
          ======================================================== */}
      <CoverageMapSection />

       {/* ========================================================
          6. SECCIÓN: SOCIOS INDUSTRIALES
          ======================================================== */}
      <IndustralClients />

      {/* ========================================================
          7. SECCIÓN: FORMULARIO DE SOLICITUD DE EVALUACIÓN
          ======================================================== */}
      <ContactFormSection />
    </>
  )
}