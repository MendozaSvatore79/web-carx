'use client'

import React, { useState, useEffect, useRef } from 'react'

interface HubLocation {
  id: string
  name: string
  state: string
  region: 'golfo' | 'norte' | 'centro' | 'occidente'
  x: number // Coordenadas en viewBox (0-950)
  y: number // Coordenadas en viewBox (0-560)
  labelAnchor?: 'start' | 'end' | 'middle'
  labelDx?: number
  labelDy?: number
  isMainBase?: boolean
  description: string
  services: string
}

export default function CoverageMapSection() {
  const hubs: HubLocation[] = [
    {
      id: 'coatzacoalcos',
      name: 'Coatzacoalcos (Matriz)',
      state: 'Veracruz',
      region: 'golfo',
      x: 640,
      y: 420,
      labelAnchor: 'start',
      labelDx: 14,
      labelDy: 5,
      isMainBase: true,
      description: 'Planta de operaciones y centro neurálgico CARXO.',
      services: 'Transporte de residuos peligrosos, celdas de almacenamiento y muestreo de suelos.',
    },
    {
      id: 'monterrey',
      name: 'Monterrey',
      state: 'Nuevo León',
      region: 'norte',
      x: 510,
      y: 200,
      labelAnchor: 'start',
      labelDx: 12,
      labelDy: -6,
      description: 'Polo industrial del norte y manufactura pesada.',
      services: 'Traslado de solventes, aceites gastados y residuos metalmecánicos.',
    },
    {
      id: 'tampico',
      name: 'Tampico',
      state: 'Tamaulipas',
      region: 'norte',
      x: 560,
      y: 290,
      labelAnchor: 'start',
      labelDx: 12,
      labelDy: -4,
      description: 'Corredor petroquímico e industrial del Golfo Norte.',
      services: 'Logística de químicos a granel y residuos de procesos industriales.',
    },
    {
      id: 'queretaro',
      name: 'Querétaro / Bajío',
      state: 'Querétaro',
      region: 'centro',
      x: 470,
      y: 335,
      labelAnchor: 'end',
      labelDx: -12,
      labelDy: -6,
      description: 'Corredor aeroespacial, automotriz y metalmecánico.',
      services: 'Centros de transferencia autorizados y logística programada.',
    },
    {
      id: 'guadalajara',
      name: 'Guadalajara',
      state: 'Jalisco',
      region: 'occidente',
      x: 380,
      y: 350,
      labelAnchor: 'end',
      labelDx: -12,
      labelDy: 4,
      description: 'Polo tecnológico, químico y manufacturero del occidente.',
      services: 'Transporte federal de residuos químicos e industriales.',
    },
    {
      id: 'cdmx',
      name: 'CDMX / Toluca',
      state: 'Valle de México',
      region: 'centro',
      x: 510,
      y: 375,
      labelAnchor: 'end',
      labelDx: -12,
      labelDy: 14,
      description: 'Atención a parques industriales del Valle de México.',
      services: 'Asesoría ambiental, trámites COA y auditorías PROFEPA.',
    },
    {
      id: 'puebla',
      name: 'Puebla',
      state: 'Puebla',
      region: 'centro',
      x: 550,
      y: 390,
      labelAnchor: 'start',
      labelDx: 10,
      labelDy: 14,
      description: 'Zona manufacturera y automotriz del centro del país.',
      services: 'Disposición y transporte con manifiestos digitales en regla.',
    },
    {
      id: 'veracruz-puerto',
      name: 'Puerto de Veracruz',
      state: 'Veracruz',
      region: 'golfo',
      x: 595,
      y: 360,
      labelAnchor: 'start',
      labelDx: 12,
      labelDy: -6,
      description: 'Conexión logística portuaria y aduanera.',
      services: 'Gestión de residuos marítimos, químicos y solventes.',
    },
    {
      id: 'villahermosa',
      name: 'Villahermosa',
      state: 'Tabasco',
      region: 'golfo',
      x: 710,
      y: 435,
      labelAnchor: 'start',
      labelDx: 12,
      labelDy: 14,
      description: 'Corredor energético y petrolero del sureste.',
      services: 'Tratamiento de lodos de perforación y residuos hidrocarburíferos.',
    },
    {
      id: 'carmen',
      name: 'Cd. del Carmen',
      state: 'Campeche',
      region: 'golfo',
      x: 760,
      y: 410,
      labelAnchor: 'start',
      labelDx: 12,
      labelDy: -6,
      description: 'Soporte a operaciones costa afuera e industria marina.',
      services: 'Manejo de residuos industriales y remanentes especiales.',
    },
    {
      id: 'merida',
      name: 'Mérida',
      state: 'Yucatán',
      region: 'golfo',
      x: 830,
      y: 360,
      labelAnchor: 'start',
      labelDx: 12,
      labelDy: -6,
      description: 'Polo logístico y comercial de la península.',
      services: 'Recolección y confinamiento final autorizado.',
    },
    {
      id: 'chihuahua',
      name: 'Chihuahua',
      state: 'Chihuahua',
      region: 'norte',
      x: 340,
      y: 150,
      labelAnchor: 'end',
      labelDx: -10,
      labelDy: -6,
      description: 'Corredor minero y manufacturero del norte.',
      services: 'Transporte de sustancias químicas y reactivos.',
    },
  ]

  const mainBase = hubs[0]
  const destinationHubs = hubs.slice(1)

  const [currentIndex, setCurrentIndex] = useState(0)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Recorrido automático continuo
  useEffect(() => {
    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinationHubs.length)
    }, 2800)

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current)
    }
  }, [destinationHubs.length])

  const activeHub = destinationHubs[currentIndex] || mainBase

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl">
        
        {/* Cabecera de la Sección en Español */}
        <div className="mb-12 sm:mb-16">
          <span className="inline-flex items-center rounded-sm border border-[#8A1B1B] bg-red-50/70 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#8A1B1B] mb-3">
            Infraestructura y Destinos
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight max-w-4xl">
            Rutas de Cobertura y Centros de Transferencia Autorizados
          </h2>

          <p className="mt-4 text-base sm:text-lg font-medium text-slate-600 max-w-3xl">
            Conectamos las principales zonas industriales de la República Mexicana con centros de disposición final certificados.
          </p>
        </div>

        {/* Contenedor Principal: Mapa Estructurado (Izquierda) + Ficha Informativa (Derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LADO IZQUIERDO: Tarjeta del Mapa con Paneles Integrados en Español */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-200/90 bg-[#fbfbfa] p-5 sm:p-7 shadow-xs relative overflow-hidden">
            
            {/* Contenedor del Mapa SVG y Paneles */}
            <div className="relative w-full aspect-[16/10] min-h-[480px]">
              
              {/* PANEL SUPERIOR IZQUIERDO: Todo en Español */}
              <div className="absolute top-4 left-4 z-20 max-w-[220px] pointer-events-none hidden sm:block">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#8A1B1B] block">
                  MÉXICO:
                </span>
                <span className="text-base font-black tracking-tight text-slate-900 block leading-tight">
                  RUTAS LOGÍSTICAS
                </span>
                <span className="text-[0.65rem] font-bold text-slate-500 block mb-3">
                  COBERTURA NACIONAL CARXO
                </span>

                {/* Balas informativas en español */}
                <div className="space-y-2 text-[0.68rem] font-bold text-slate-700 bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-slate-200/70 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#8A1B1B] text-white text-[0.55rem]">
                      ★
                    </span>
                    <span>Sede Matriz Veracruz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-800 text-white text-[0.55rem]">
                      🏭
                    </span>
                    <span>Zonas Industriales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white text-[0.55rem]">
                      📍
                    </span>
                    <span>Centros de Transferencia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[0.55rem]">
                      ✓
                    </span>
                    <span>Permisos SCT en Regla</span>
                  </div>
                </div>

                {/* 3 Indicadores Rápidos en Español */}
                <div className="grid grid-cols-3 gap-1.5 mt-2.5 text-center">
                  <div className="bg-white/90 border border-slate-200/60 p-1.5 rounded-lg shadow-2xs">
                    <span className="text-[0.58rem] font-extrabold text-slate-400 block uppercase">PERMISOS</span>
                    <span className="text-[0.68rem] font-black text-slate-900">SCT/FED</span>
                  </div>
                  <div className="bg-white/90 border border-slate-200/60 p-1.5 rounded-lg shadow-2xs">
                    <span className="text-[0.58rem] font-extrabold text-slate-400 block uppercase">RASTREO</span>
                    <span className="text-[0.68rem] font-black text-[#8A1B1B]">GPS 24/7</span>
                  </div>
                  <div className="bg-white/90 border border-slate-200/60 p-1.5 rounded-lg shadow-2xs">
                    <span className="text-[0.58rem] font-extrabold text-slate-400 block uppercase">VOLUMEN</span>
                    <span className="text-[0.68rem] font-black text-slate-900">+120K TON</span>
                  </div>
                </div>
              </div>

              {/* PANEL SUPERIOR DERECHO: Simbología en Español */}
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-slate-200/80 shadow-2xs text-[0.68rem] font-bold text-slate-700 hidden sm:flex flex-col gap-2">
                <span className="text-[0.60rem] font-black uppercase tracking-wider text-slate-400">
                  SIMBOLOGÍA OFICIAL
                </span>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8A1B1B]" />
                  <span>Sede Matriz (Coatzacoalcos)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-4 bg-[#8A1B1B]" />
                  <span>Ruta Activa Autorizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-600" />
                  <span>Polo Industrial / Destino</span>
                </div>
              </div>

              {/* LIENZO SVG: Mapa Geográfico Proporcionado de México */}
              <svg
                viewBox="0 0 950 560"
                className="w-full h-full select-none absolute inset-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Gradiente de ruta activa #8A1B1B */}
                  <linearGradient id="mexicoRouteGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8A1B1B" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>

                  {/* Sombra de relieve suave */}
                  <filter id="mapShadow" x="-5%" y="-5%" width="110%" height="115%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.08" />
                  </filter>
                </defs>

                {/* Silueta Geográfica Realista y Proporcionada de México */}
                <g filter="url(#mapShadow)">
                  {/* Masa Continental de la República Mexicana */}
                  <path
                    d="
                      M 130 90
                      C 180 80, 240 100, 300 120
                      C 370 110, 440 130, 500 150
                      C 540 190, 555 240, 580 270
                      C 600 300, 615 325, 640 345
                      C 670 370, 710 385, 750 365
                      C 790 345, 840 330, 875 350
                      C 890 375, 865 410, 820 420
                      C 770 430, 720 455, 680 465
                      C 620 440, 560 435, 510 420
                      C 440 405, 370 385, 310 355
                      C 240 295, 180 215, 130 155
                      Z
                    "
                    fill="#e2e8f0"
                    stroke="#cbd5e1"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />

                  {/* Península de Baja California */}
                  <path
                    d="
                      M 100 85
                      C 135 140, 175 220, 195 300
                      C 185 310, 170 310, 160 290
                      C 140 220, 100 145, 70 85
                      Z
                    "
                    fill="#e2e8f0"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  {/* Zona de Cobertura Crítica / Golfo y Sureste */}
                  <path
                    d="
                      M 530 265
                      C 580 305, 650 345, 740 355
                      C 810 355, 835 395, 780 425
                      C 710 445, 640 425, 550 385
                      Z
                    "
                    fill="#fee2e2"
                    fillOpacity="0.45"
                    stroke="#fca5a5"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </g>

                {/* =======================================================
                    RUTAS LOGÍSTICAS EN ABANICO DESDE COATZACOALCOS
                    ======================================================= */}
                {destinationHubs.map((hub) => {
                  const isActive = activeHub.id === hub.id

                  const pathD = `M ${mainBase.x} ${mainBase.y} Q ${
                    (mainBase.x + hub.x) / 2 + (hub.x < mainBase.x ? -25 : 25)
                  } ${(mainBase.y + hub.y) / 2 - 40} ${hub.x} ${hub.y}`

                  return (
                    <g key={`route-${hub.id}`}>
                      {/* Ruta inactiva */}
                      <path
                        d={pathD}
                        stroke={isActive ? 'none' : '#cbd5e1'}
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                      />

                      {/* Ruta activa con animación láser en vivo */}
                      {isActive && (
                        <>
                          <path
                            d={pathD}
                            stroke="url(#mexicoRouteGlow)"
                            strokeWidth="3.5"
                            fill="none"
                            className="transition-all duration-300 drop-shadow-sm"
                          />
                          <circle r="5" fill="#8A1B1B">
                            <animateMotion path={pathD} dur="1.8s" repeatCount="indefinite" />
                          </circle>
                        </>
                      )}
                    </g>
                  )
                })}

                {/* =======================================================
                    NODOS Y ETIQUETAS DE LA RED LOGÍSTICA
                    ======================================================= */}
                {hubs.map((hub) => {
                  const isMain = hub.isMainBase
                  const isActive = activeHub.id === hub.id
                  const hubIndex = destinationHubs.findIndex((d) => d.id === hub.id)

                  return (
                    <g
                      key={hub.id}
                      className="cursor-pointer group/node"
                      onClick={() => {
                        if (!isMain && hubIndex !== -1) {
                          setCurrentIndex(hubIndex)
                        }
                      }}
                    >
                      {/* Halo pulsante de Sede Matriz Coatzacoalcos */}
                      {isMain && (
                        <>
                          <circle
                            cx={hub.x}
                            cy={hub.y}
                            r="26"
                            fill="#8A1B1B"
                            fillOpacity="0.15"
                            className="animate-ping"
                          />
                          <circle
                            cx={hub.x}
                            cy={hub.y}
                            r="16"
                            fill="#8A1B1B"
                            fillOpacity="0.25"
                          />
                        </>
                      )}

                      {/* Halo del nodo activo en tránsito */}
                      {isActive && !isMain && (
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r="16"
                          fill="#8A1B1B"
                          fillOpacity="0.25"
                          className="animate-pulse"
                        />
                      )}

                      {/* Punto Central */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r={isMain ? 8 : isActive ? 6.5 : 4.5}
                        fill={isMain ? '#8A1B1B' : isActive ? '#8A1B1B' : '#475569'}
                        stroke="#ffffff"
                        strokeWidth={2}
                        className="transition-all duration-200 drop-shadow-xs"
                      />

                      {/* Nombre de la Ciudad */}
                      <text
                        x={hub.x + (hub.labelDx ?? 12)}
                        y={hub.y + (hub.labelDy ?? 4)}
                        textAnchor={hub.labelAnchor ?? 'start'}
                        fontSize={isMain ? '12.5' : isActive ? '11.5' : '10'}
                        fontWeight={isMain || isActive ? '900' : '700'}
                        fill={isMain ? '#8A1B1B' : isActive ? '#0f172a' : '#64748b'}
                        className="transition-all duration-200 select-none"
                      >
                        {hub.name}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

          </div>

          {/* LADO DERECHO: Tarjetas de Información de Presencia */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Nuestra presencia en el país
            </h3>

            {/* Item 1: Zonas de Cobertura */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#8A1B1B] shadow-2xs">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-base font-black text-slate-900 leading-snug">
                  Zonas de Cobertura
                </span>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-1">
                  Presencia crítica en el norte, centro, occidente y golfo de México.
                </p>
              </div>
            </div>

            {/* Item 2: Centros de Transferencia */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#8A1B1B] shadow-2xs">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-base font-black text-slate-900 leading-snug">
                  Centros de Transferencia
                </span>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-1">
                  Estaciones autorizadas para optimizar la logística de grandes volúmenes.
                </p>
              </div>
            </div>

            {/* Item 3: Rutas Certificadas SCT */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#8A1B1B] shadow-2xs">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-base font-black text-slate-900 leading-snug">
                  Rutas Certificadas SCT
                </span>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-1">
                  Caminos federales aprobados y monitoreados vía GPS las 24 horas.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
