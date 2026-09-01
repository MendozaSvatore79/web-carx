'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico Inicial',
    description:
      'Clasificación CRETI y análisis de volumen para determinar el plan de manejo óptimo.',
  },
  {
    number: '02',
    title: 'Recolección y Envasado',
    description:
      'Etiquetado homologado y carga segura utilizando equipo industrial especializado.',
  },
  {
    number: '03',
    title: 'Transporte Monitoreado',
    description:
      'Traslado en ruta federal con rastreo GPS continuo y choferes altamente capacitados.',
  },
  {
    number: '04',
    title: 'Disposición Final',
    description:
      'Confinamiento o incineración autorizada, emitiendo el manifiesto final para su archivo.',
  },
]

export default function OurProcess() {
  return (
    <section className="w-full bg-[#f5f7f8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px] pt-10 sm:pt-14">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center border border-[#d93a3a] bg-transparent px-5 py-1.5 text-sm font-black uppercase tracking-wide text-[#d93a3a]">
            Metodología Operativa
          </span>

          <h2 className="max-w-6xl text-[2.5rem] font-black leading-[1.05] tracking-[-0.05em] text-[#0f172a] sm:text-[3.2rem] lg:text-[5rem]">
            Nuestro Proceso Operativo Paso a Paso
          </h2>

          <p className="mt-6 max-w-4xl text-xl text-slate-600">
            Estructura logística refinada para asegurar la transparencia y el cuidado ecológico total.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-[260px] flex-col justify-start rounded-[18px] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-7 text-[3rem] font-black leading-none tracking-[-0.06em] text-[#1e3a8a] opacity-90">
                {step.number}
              </div>

              <h3 className="mb-4 text-[1.9rem] font-black leading-tight tracking-[-0.04em] text-slate-900">
                {step.title}
              </h3>

              <p className="max-w-[260px] text-lg leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
