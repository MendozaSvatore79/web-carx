'use client'

import React, { useEffect, useRef, useState } from 'react'

import Link from 'next/link'



export default function ReadyToJoinUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  

  return (
    <section
      ref={sectionRef}
      className="w-full bg-slate-50/60 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Encabezado */}
        <div className="text-center flex flex-col items-center mb-14 sm:mb-16">
          <span className="inline-flex items-center rounded-sm border border-[#1A5EB0] bg-[#1A5EB0]/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#1A5EB0] mb-4">
           Atención Inmediata
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight max-w-3xl">
          ¿Listo para blindar la responsabilidad ambiental de su planta?
          </h2>
          <p className="mt-6 max-w-xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-slate-700">
            Nuestros expertos estructuran un plan personalizado conforme a la legislación de SEMARNAT y la SCT en menos de 24 horas.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
            <Link
              href="/servicios#cotizar"
              className="w-full sm:w-auto rounded-md bg-[#8A1B1B] px-8 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-sm hover:bg-[#701515] active:scale-95 transition-all"
            >
              Solicitar Cotización Inmediata
            </Link>
            
            <Link
              href="/servicios"
              className="w-full sm:w-auto rounded-md border border-slate-400 bg-white/90 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-[#701515] hover:text-white active:scale-95 transition-all shadow-2xs"
            >
             Hablar con un Especialista
            </Link>
          </div>
        </div>

        

      </div>
    </section>
  )
}
