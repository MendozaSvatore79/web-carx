'use client'

import React from 'react'

export default function ServicesSection() {
  const services = [
    {
      title: 'Transporte Especializado',
      description:
        'Unidades equipadas de última generación con operadores certificados ante la SCT para el traslado seguro de químicos, solventes y reactivos.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8 17a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM3 9h10v8H3V9zm10 2h4l3 3v3h-7v-6z"
          />
        </svg>
      ),
    },
    {
      title: 'Gestión Integral',
      description:
        'Clasificación, envasado, etiquetado y almacenamiento temporal seguro antes de su tratamiento o confinamiento final.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
    },
    {
      title: 'Manifiestos y Trámites',
      description:
        'Redacción y entrega de Manifiestos de Entrega, Transporte y Recepción alineados a la normatividad de SEMARNAT de manera digital.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Asesoría Ambiental',
      description:
        'Consultoría experta para auditorías de la PROFEPA, planes de manejo de residuos y trámites de COA anual.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Cabecera de la Sección */}
        <div className="text-center flex flex-col items-center mb-14 sm:mb-16">
          
          {/* Badge / Etiqueta Superior en rojo #8A1B1B */}
          <span className="inline-flex items-center rounded-sm border border-[#8A1B1B] bg-red-50/70 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#8A1B1B] mb-4">
            Portafolio Corporativo
          </span>

          {/* Título Principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight max-w-3xl">
            Soluciones Integrales para Residuos Peligrosos
          </h2>
        </div>

        {/* Grilla de 4 Tarjetas de Servicios con acentos en #8A1B1B */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs hover:border-[#8A1B1B]/40 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-200"
            >
              <div>
                {/* Contenedor del Icono en Rojo Corporativo #8A1B1B */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#8A1B1B] mb-6 group-hover:bg-[#8A1B1B] group-hover:text-white transition-colors duration-200">
                  {service.icon}
                </div>

                {/* Título del Servicio */}
                <h3 className="text-lg font-black text-slate-900 leading-snug mb-3">
                  {service.title}
                </h3>

                {/* Descripción Detallada */}
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Rayita / Acento en la parte inferior en #8A1B1B */}
              <div className="mt-6 h-0.5 w-8 rounded-full bg-slate-200 group-hover:w-full group-hover:bg-[#8A1B1B] transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
