'use client'

import React, { useState } from 'react'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    tipoResiduo: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [folioId, setFolioId] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
        setSubmittedEmail(formData.correo)
        setFolioId(data.folio || `CARXO-${Math.floor(100000 + Math.random() * 900000)}`)
        setFormData({
          nombre: '',
          empresa: '',
          correo: '',
          tipoResiduo: '',
        })
      } else {
        setErrorMessage(
          data.error ? `${data.message} (${data.error})` : data.message || 'Ocurrió un problema al enviar la solicitud.'
        )
      }
    } catch (err: unknown) {
      console.error('Error enviando formulario:', err)
      setErrorMessage('Error de conexión. Intente nuevamente más tarde.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="cotizar" className="w-full bg-slate-50/70 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-flex items-center rounded-md border border-[#8A1B1B]/40 bg-red-50/70 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#8A1B1B] mb-5">
              Contacto Directo
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Inicie su Cotización de Servicio Hoy Mismo
            </h2>

            <p className="mt-5 text-base sm:text-lg font-medium text-slate-600 leading-relaxed">
              Complete el formulario con los detalles de sus residuos industriales. Un ingeniero ambiental especialista se pondrá en contacto para diseñar un plan de contingencia y logística a la medida.
            </p>

            {/* Teléfono y Correo de Contacto */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3.5 text-slate-900">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-[#8A1B1B]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-extrabold text-sm sm:text-base text-slate-900">
                  Línea Nacional Sin Costo: 800-ECO-TRANS
                </span>
              </div>

              <div className="flex items-center gap-3.5 text-slate-900">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-[#8A1B1B]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-extrabold text-sm sm:text-base text-slate-900">
                  cotizaciones@carxo.com.mx
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta del Formulario */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-xl rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 md:p-10 shadow-xs transition-all duration-300">
              
              {submitted ? (
                /* Card de Éxito Ejecutiva y Animada */
                <div className="py-4 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
                  
                  {/* Icono de Verificación Animado */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <div className="absolute h-16 w-16 rounded-full bg-red-100 animate-ping opacity-75" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#8A1B1B] text-white shadow-md">
                      <svg className="h-8 w-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-slate-700 mb-3">
                    Solicitud Registrada
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                    ¡Evaluación en Proceso!
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 max-w-md font-medium leading-relaxed">
                    Hemos enviado la confirmación oficial a su correo corporativo:{' '}
                    <strong className="text-slate-900 font-bold">{submittedEmail}</strong>
                  </p>

                  {/* Ficha Ejecutiva del Folio */}
                  <div className="w-full mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-5 text-left space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Folio de Atención</span>
                      <span className="font-mono text-sm font-black text-[#8A1B1B] bg-red-50 border border-red-200/60 px-2.5 py-0.5 rounded-md">
                        {folioId}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Asignación</span>
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Ingeniero Ambiental HSE
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Tiempo de Respuesta</span>
                      <span className="text-xs font-extrabold text-slate-900">
                        &lt; 24 Horas Hábiles
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-lg border border-slate-300 bg-white px-6 py-2.5 text-xs font-black uppercase tracking-wider text-slate-800 hover:bg-slate-900 hover:text-white active:scale-95 transition-all shadow-2xs cursor-pointer"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-6">
                    Solicitud de Evaluación
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs sm:text-sm font-semibold text-red-800">
                        {errorMessage}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                        Nombre del Contacto
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Ing. Juan Pérez"
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#8A1B1B] focus:outline-none focus:ring-1 focus:ring-[#8A1B1B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        required
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Ej. Industrias Metalúrgicas S.A."
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#8A1B1B] focus:outline-none focus:ring-1 focus:ring-[#8A1B1B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                        Correo Corporativo
                      </label>
                      <input
                        type="email"
                        name="correo"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="contacto@empresa.com"
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#8A1B1B] focus:outline-none focus:ring-1 focus:ring-[#8A1B1B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                        Tipo de Residuo
                      </label>
                      <input
                        type="text"
                        name="tipoResiduo"
                        required
                        value={formData.tipoResiduo}
                        onChange={handleChange}
                        placeholder="Ej. Aceites usados, lodos galvánicos, etc."
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#8A1B1B] focus:outline-none focus:ring-1 focus:ring-[#8A1B1B] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 rounded-md bg-[#C82323] hover:bg-[#A81B1B] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Enviando solicitud...
                        </>
                      ) : (
                        'Enviar Solicitud Seguro'
                      )}
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
