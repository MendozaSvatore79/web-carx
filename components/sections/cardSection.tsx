'use client'

import React from 'react'

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path
          d="M4 11.5V7.5A1.5 1.5 0 0 1 5.5 6H9l1.5-2h3L15 6h3.5A1.5 1.5 0 0 1 20 7.5v4M4 11.5h16M7 18.5h10M7 15.5h10v3H7z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Centros de Transferencia Autorizados',
    description:
      'Nuestras instalaciones intermedias de acopio están diseñadas bajo la norma mexicana NOM-052-SEMARNAT. Cuentan con laboratorios de análisis rápido para la correcta clasificación de reactivos y almacenamiento temporal hermético que elimina cualquier posibilidad de derrame ambiental.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M12 3.5l7.5 3.5v5.4A11 11 0 0 1 12 22a11 11 0 0 1-7.5-9.6V7L12 3.5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 12.5l1.6 1.7 3.7-4.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Rutas Federales Certificadas SCT',
    description:
      'La planeación de rutas federales de transporte prioriza caminos rápidos de bajo riesgo poblacional, cumpliendo con la Ley de Caminos, Puentes y Autotransporte Federal. Monitoreamos en tiempo real con sensores de apertura, telemetría y botones de pánico integrados directamente a nuestra central de control.',
  },
]

export default function CardSection() {
  return (
    <section className="w-full bg-[#f5f7f8] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[300px] flex-col rounded-[18px] border border-slate-200 bg-[#f6f8f9] p-7 shadow-sm sm:p-8"
            >
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-xl border border-[#3a8be0] bg-[#edf5ff] text-[#1e5ecb]">
                {card.icon}
              </div>

              <h3 className="mb-4 text-[2rem] font-black leading-tight tracking-[-0.05em] text-slate-900">
                {card.title}
              </h3>

              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
