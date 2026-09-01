'use client'

import React, { useEffect, useRef, useState } from 'react'

interface StatItem {
  target: number
  prefix?: string
  suffix?: string
  label: string
  subtext: string
  decimals?: boolean
}

function CounterNumber({
  target,
  prefix = '',
  suffix = '',
  isVisible,
}: {
  target: number
  prefix?: string
  suffix?: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const duration = 2000 // 2 segundos de animación suave

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing out cubic para desaceleración suave
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(easeProgress * target)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target])

  const formattedNumber =
    target >= 1000
      ? count.toLocaleString('en-US')
      : count.toString()

  return (
    <span className="tabular-nums font-black tracking-tight">
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
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

  const stats: StatItem[] = [
    {
      target: 15,
      suffix: '+',
      label: 'Años de Experiencia',
      subtext: 'Operando sin interrupciones en el sector industrial',
    },
    {
      target: 120,
      suffix: 'K+',
      label: 'Toneladas Gestionadas',
      subtext: 'Transportadas y confinadas con éxito',
    },
    {
      target: 1500,
      suffix: '+',
      label: 'Clientes Industriales',
      subtext: 'Confían en nuestro blindaje regulatorio',
    },
    {
      target: 0,
      suffix: '%',
      label: 'Incidentes Mayores',
      subtext: 'Récord gracias a estrictas medidas de seguridad',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full bg-slate-50/60 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Encabezado */}
        <div className="text-center flex flex-col items-center mb-14 sm:mb-16">
          <span className="inline-flex items-center rounded-sm border border-[#8A1B1B] bg-red-50/70 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#8A1B1B] mb-4">
            Trayectoria
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight max-w-3xl">
            Números que Respaldan Nuestra Confiabilidad
          </h2>
        </div>

        {/* Grilla de 4 Tarjetas de Contadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center rounded-2xl border border-slate-200/90 bg-white p-8 shadow-xs hover:shadow-md hover:border-[#0284c7]/40 transition-all duration-200"
            >
              {/* Valor Numérico Animado */}
              <div className="text-4xl sm:text-5xl font-black text-[#0284c7] mb-3">
                <CounterNumber
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Título de la Métrica */}
              <h3 className="text-base font-black text-slate-900 mb-2">
                {stat.label}
              </h3>

              {/* Descripción */}
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[220px]">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
