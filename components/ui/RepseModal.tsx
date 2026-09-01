'use client'

import React from 'react'

interface RepseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RepseModal({ isOpen, onClose }: RepseModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      
      {/* Contenedor con el diseño institucional exacto del portal del Gobierno de México */}
      <div
        className="relative w-full max-w-3xl bg-white rounded-md shadow-2xl border border-slate-300 overflow-hidden text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Cabecera idéntica al Padrón Público STPS */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-200 bg-white">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Padrón Público de Contratistas de Servicios Especializados u Obras Especializadas.
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-xl font-light leading-none p-1"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Formulario con campos oficiales idénticos a repse.stps.gob.mx */}
        <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto font-sans text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Folio REPSE */}
            <div>
              <label className="block text-[0.75rem] font-semibold text-slate-700 mb-1">
                Folio REPSE
              </label>
              <div className="w-full rounded-sm border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-900">
                53586
              </div>
            </div>

            {/* Nombre o Razón Social */}
            <div>
              <label className="block text-[0.75rem] font-semibold text-slate-700 mb-1">
                Nombre o Razón social
              </label>
              <div className="w-full rounded-sm border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-900 truncate">
                CARXO MULTISERVICIOS SA DE CV
              </div>
            </div>

            {/* Entidad / Municipio */}
            <div>
              <label className="block text-[0.75rem] font-semibold text-slate-700 mb-1">
                Entidad / Municipio
              </label>
              <div className="w-full rounded-sm border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-900">
                VERACRUZ DE IGNACIO DE LA LLAVE / COATZACOALCOS
              </div>
            </div>

            {/* Aviso de Registro */}
            <div>
              <label className="block text-[0.75rem] font-semibold text-slate-700 mb-1">
                Aviso de registro N. / Fecha de aviso de registro
              </label>
              <div className="w-full rounded-sm border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-900">
                AR-30750/2026
              </div>
            </div>

            {/* Vigencia */}
            <div>
              <label className="block text-[0.75rem] font-semibold text-slate-700 mb-1">
                Vigencia del registro
              </label>
              <div className="w-full rounded-sm border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-900">
                25/8/2029
              </div>
            </div>

          </div>

          {/* Línea divisoria guinda institucional */}
          <div className="border-t-2 border-[#691C32] pt-4 mt-4">
            <p className="text-xs font-bold text-slate-800 mb-2">
              • Ofreciendo los siguientes servicios
            </p>

            <ol className="space-y-2 text-xs text-slate-800 leading-relaxed font-normal pl-2">
              <li>
                <strong>1.</strong> TRANSPORTE DE MATERIALES, PRODUCTOS, REMANENTES Y DESECHOS PELIGROSOS
              </li>
              <li>
                <strong>2.</strong> CONSTRUCCION DE CELDAS DE ALMACENAMIENTO, REALIZACION DE MUESTREOS Y CARACTERIZACION DE SUELOS CONTAMINADOS
              </li>
              <li>
                <strong>3.</strong> INGENIERIA, DISEÑO, DESARROLLO, PROCURA Y CONSTRUCCION DE TODO TIPO DE OBRA MECÁNICA, CIVIL, ELÉCTRICA, MONTAJE DE TUBERÍAS Y VÁLVULAS DE DIFERENTES DIÁMETROS. SOLDADURA Y PAILERÍA ESPECIALIZADA, SUMINISTRO Y COLOCACIÓN DE AISLAMIENTO TÉRMICO.
              </li>
            </ol>
          </div>

          {/* Botón Cerrar idéntico al portal oficial */}
          <div className="pt-3">
            <button
              onClick={onClose}
              className="rounded-md bg-[#691C32] px-6 py-2 text-xs font-bold text-white hover:bg-[#521426] transition-colors"
            >
              Cerrar
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
