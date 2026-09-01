'use client'

import React, { useEffect, useRef, useState } from 'react'



export default function OurCoverage() {
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
          <span className="inline-flex items-center rounded-sm border border-[#CC2222] bg-[#CC2222]/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#CC2222] mb-4">
            Operación Logística
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight max-w-3xl">
           Cobertura Nacional Estratégica
          </h2>
          <p className="mt-6 max-w-5xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-slate-700">
            Operamos bajo rigurosas licencias federales de la SCT conectando los principales polos manufactureros con centros de tratamiento final estratégicamente ubicados.
          </p>
        </div>

        

      </div>
    </section>
  )
}
