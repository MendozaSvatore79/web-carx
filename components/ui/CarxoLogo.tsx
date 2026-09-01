'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

interface CarxoLogoProps {
  className?: string
  size?: number | string
  animateOnHover?: boolean
  showText?: boolean
  isStatic?: boolean
}

export default function CarxoLogo({
  className = '',
  size = 68,
  animateOnHover = true,
  showText = false,
  isStatic = false,
}: CarxoLogoProps) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const isSpinningRef = useRef(false)
  const lastTriggerTimeRef = useRef(0)
  const lastScrollYRef = useRef(0)

  const triggerAnimation = useCallback(() => {
    if (isStatic) return
    const now = Date.now()
    if (isSpinningRef.current || now - lastTriggerTimeRef.current < 2000) return
    
    lastTriggerTimeRef.current = now
    isSpinningRef.current = true
    setIsSpinning(true)
    setAnimKey((k) => k + 1)

    setTimeout(() => {
      isSpinningRef.current = false
      setIsSpinning(false)
    }, 1850)
  }, [isStatic])

  // 1. Animación suave al cargar la página
  useEffect(() => {
    if (isStatic) return
    const timer = setTimeout(() => {
      triggerAnimation()
    }, 300)
    return () => clearTimeout(timer)
  }, [triggerAnimation, isStatic])

  // 2. Animación periódica en reposo (cada 8 segundos)
  useEffect(() => {
    if (isStatic) return
    const interval = setInterval(() => {
      triggerAnimation()
    }, 8000)
    return () => clearInterval(interval)
  }, [triggerAnimation, isStatic])

  // 3. Animación instantánea al hacer Scroll, Rueda del Ratón (Wheel) o Touch
  useEffect(() => {
    if (isStatic) return
    const handleScrollOrWheel = () => {
      const currentY = window.scrollY
      const delta = Math.abs(currentY - lastScrollYRef.current)
      lastScrollYRef.current = currentY

      // Activa el giro inmediato ante cualquier movimiento de scroll o rueda
      if (delta > 2 || currentY > 5) {
        triggerAnimation()
      }
    }

    window.addEventListener('scroll', handleScrollOrWheel, { passive: true })
    window.addEventListener('wheel', handleScrollOrWheel, { passive: true })
    window.addEventListener('touchmove', handleScrollOrWheel, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScrollOrWheel)
      window.removeEventListener('wheel', handleScrollOrWheel)
      window.removeEventListener('touchmove', handleScrollOrWheel)
    }
  }, [triggerAnimation])

  return (
    <div
      className={`group inline-flex items-center gap-3 select-none cursor-pointer active:scale-95 transition-transform duration-200 ${className}`}
      onMouseEnter={() => {
        if (animateOnHover) triggerAnimation()
      }}
      onClick={triggerAnimation}
     
    >
      {/* Contenedor del icono SVG ampliado */}
      <div
        className="relative flex items-center justify-center shrink-0 overflow-visible"
        style={{ width: size, height: size }}
      >
        <svg
          key={animKey}
          viewBox="36 0 136 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible drop-shadow-xs"
        >
          <defs>
            {/* Gradiente sutil para la flama roja corporativa #8A1B1B */}
            <linearGradient id="carxoRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b91c1c" />
              <stop offset="60%" stopColor="#8A1B1B" />
              <stop offset="100%" stopColor="#701515" />
            </linearGradient>

            {/* Gradiente sutil para la flama azul #0284c7 */}
            <linearGradient id="carxoBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>

          {/* =========================================================
              1. BASE: Silueta de Engranaje con Túnel + 2 Chimeneas (Estática)
              ========================================================= */}
          <g
            className="carxo-svg-layer"
            style={{ transformOrigin: '104px 96px', transformBox: 'view-box' }}
          >
            {/* Silueta negra pura del engranaje y chimeneas */}
            <path
              d="
                M 46 138
                L 46 128
                L 64 128
                L 56 110
                L 72 100
                L 80 112
                L 88 112
                L 88 54
                L 100 54
                L 100 82
                L 110 82
                L 110 68
                L 120 68
                L 120 112
                L 128 112
                L 136 100
                L 152 110
                L 144 128
                L 162 128
                L 162 138
                L 124 138
                A 24 24 0 0 0 84 138
                Z
              "
              fill="#050505"
            />

            {/* Tapa gris superior de la chimenea alta izquierda */}
            <path
              d="
                M 88 54
                L 88 44
                C 88 40, 91 38, 94 38
                L 100 38
                L 100 54
                Z
              "
              fill="#9ca3af"
            />
          </g>

          {/* =========================================================
              2. FLAMA ROJA (#8A1B1B): Llamarada viva con animación ascendente
              ========================================================= */}
          <g
            className={`carxo-svg-layer ${
              isSpinning ? 'animate-flame-red-flare' : 'carxo-flame-hover'
            }`}
            style={{ transformOrigin: '104px 96px', transformBox: 'view-box' }}
          >
            {/* Flama roja con gradiente y precisión milimétrica */}
            <path
              d="
                M 92 34
                C 96 20, 108 8, 138 2
                C 122 15, 110 26, 92 34
                Z
              "
              fill="url(#carxoRedGradient)"
            />
          </g>

          {/* =========================================================
              3. FLAMA AZUL (#0284c7): Llamarada viva con destello desfasado
              ========================================================= */}
          <g
            className={`carxo-svg-layer ${
              isSpinning ? 'animate-flame-blue-flare' : 'carxo-flame-hover-delayed'
            }`}
            style={{ transformOrigin: '104px 96px', transformBox: 'view-box' }}
          >
            {/* Flama azul con gradiente y precisión milimétrica */}
            <path
              d="
                M 116 54
                C 120 40, 132 30, 158 24
                C 144 38, 132 48, 116 54
                Z
              "
              fill="url(#carxoBlueGradient)"
            />
          </g>
        </svg>
      </div>

      {/* Texto integrado opcional */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline font-black tracking-tight text-slate-900">
            <span className="text-blue-600">C</span>
            <span>ARXO</span>
            <span className="ml-1.5 text-[#8A1B1B]">M</span>
            <span>ULTISERVICIOS</span>
          </div>
          <span className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#0284c7]">
            Gestión de Residuos Peligrosos
          </span>
        </div>
      )}
    </div>
  )
}
