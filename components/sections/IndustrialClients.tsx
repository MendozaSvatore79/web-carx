'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function IndustralClients() {
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
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote:
        '«CARXO ha sido una pieza clave en nuestra auditoría de Industria Limpia. El manejo de manifiestos digitales y la rapidez en su recolección de solventes es inmejorable.»',
      author: 'Ing. Alejandro Mendoza',
      role: 'Director de Planta — Automotriz Saltillo',
    },
    {
      quote:
        '«En 5 años de contrato continuo no hemos tenido un solo retraso ni observación de SEMARNAT. El blindaje legal que nos brindan nos da absoluta tranquilidad para operar.»',
      author: 'Dra. Claudia Ramos',
      role: 'Gerente de HSE — Petroquímica del Golfo',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100"
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Encabezado */}
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16">
          <span className="inline-flex items-center rounded-md border border-[#8A1B1B]/40 bg-red-50/70 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#8A1B1B] mb-4">
            Clientes Satisfechos
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight max-w-3xl">
            La Confianza de Nuestros Socios Industriales
          </h2>
        </div>

        {/* Grilla de 2 Tarjetas de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/70 bg-[#F8FAFC] p-8 sm:p-10 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all duration-300"
            >
              <p className="text-slate-700 font-medium italic text-base sm:text-lg leading-relaxed">
                {item.quote}
              </p>

              <div className="mt-8 sm:mt-10">
                <h3 className="font-extrabold text-slate-950 text-base sm:text-lg">
                  {item.author}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
