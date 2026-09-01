'use client'

import React from 'react'

export default function ClientsBar() {
  const clients = [
    { name: 'CEMEX', style: 'font-black tracking-widest text-xl sm:text-2xl' },
    { name: 'PEMEX', style: 'font-black tracking-wider text-xl sm:text-2xl' },
    { name: 'CFE', style: 'font-black tracking-widest text-2xl sm:text-3xl' },
    { name: 'GRUPO ALFA', style: 'font-extrabold tracking-wide text-lg sm:text-xl' },
    { name: 'Ternium', style: 'font-bold tracking-tight text-xl sm:text-2xl italic' },
    { name: 'MINERA PEÑOLES', style: 'font-black tracking-wider text-sm sm:text-base' },
  ]

  return (
    <section className="w-full border-y border-slate-200/70 bg-slate-50/80 py-8 px-4">
      <div className="mx-auto max-w-7xl text-center">
        
        {/* Etiqueta superior */}
        <p className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
          Operamos con las empresas industriales más importantes de México
        </p>

        {/* Logotipos corporativos */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {clients.map((client) => (
            <div
              key={client.name}
              className="text-slate-400 hover:text-slate-700 transition-colors select-none"
            >
              <span className={client.style}>{client.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
