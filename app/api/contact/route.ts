import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, empresa, correo, tipoResiduo } = body

    // Validación de campos
    if (!nombre || !empresa || !correo || !tipoResiduo) {
      return NextResponse.json(
        { success: false, message: 'Todos los campos son obligatorios.' },
        { status: 400 }
      )
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || 'gerencia@carxo.mx'
    const senderEmail = process.env.SENDER_EMAIL || recipientEmail
    const folioId = `CARXO-${Math.floor(100000 + Math.random() * 900000)}`
    const fechaHora = new Date().toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City',
      dateStyle: 'full',
      timeStyle: 'short',
    })

    // 1. PLANTILLA EJECUTIVA CORPORATIVA PARA GERENCIA (Notificación Interna)
    const adminHtmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Solicitud de Cotización</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 30px 12px; color: #111827; }
          .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; border-top: 4px solid #8A1B1B; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03); }
          .header { padding: 24px 28px 16px 28px; border-bottom: 1px solid #f3f4f6; }
          .brand-title { font-size: 15px; font-weight: 800; color: #111827; letter-spacing: -0.2px; text-transform: uppercase; margin: 0; }
          .content { padding: 28px; }
          .title { font-size: 19px; font-weight: 700; color: #111827; margin: 0 0 6px 0; letter-spacing: -0.2px; }
          .subtitle { font-size: 13px; color: #6b7280; margin: 0 0 24px 0; }
          .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .data-row { border-bottom: 1px solid #f3f4f6; }
          .data-label { padding: 12px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px; width: 35%; vertical-align: top; }
          .data-value { padding: 12px 0; font-size: 14px; font-weight: 600; color: #111827; vertical-align: top; }
          .notice-box { background-color: #f9fafb; border: 1px solid #e5e7eb; border-left: 3px solid #8A1B1B; border-radius: 4px; padding: 14px 16px; font-size: 13px; color: #374151; margin-bottom: 24px; line-height: 1.5; }
          .btn-container { text-align: left; margin-top: 20px; }
          .cta-btn { display: inline-block; background-color: #8A1B1B; color: #ffffff !important; text-decoration: none; padding: 11px 20px; border-radius: 6px; font-size: 13px; font-weight: 700; }
          .footer { background-color: #f9fafb; padding: 16px 28px; font-size: 11px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand-title">CARXO <span style="color:#6b7280; font-weight:400;">| Logística & Medio Ambiente</span></div>
          </div>
          <div class="content">
            <div class="title">Nueva Solicitud de Cotización Comercial</div>
            <div class="subtitle">Folio: <strong>${folioId}</strong> &bull; ${fechaHora}</div>
            
            <table class="data-table">
              <tr class="data-row">
                <td class="data-label">Contacto</td>
                <td class="data-value">${nombre}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Empresa</td>
                <td class="data-value">${empresa}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Correo Corporativo</td>
                <td class="data-value">
                  <a href="mailto:${correo}" style="color: #8A1B1B; text-decoration: none; font-weight: 700;">${correo}</a>
                </td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Tipo de Residuo</td>
                <td class="data-value">${tipoResiduo}</td>
              </tr>
            </table>

            <div class="notice-box">
              <strong>Nota de atención:</strong> Se recomienda establecer contacto técnico/comercial con la empresa en un plazo no mayor a 24 horas hábiles.
            </div>

            <div class="btn-container">
              <a href="mailto:${correo}?subject=RE:%20Solicitud%20de%20Cotizaci%C3%B3n%20CARXO%20-${folioId}" class="cta-btn">
                Responder a ${nombre}
              </a>
            </div>
          </div>
          <div class="footer">
            Mensaje automático generado por el portal web institucional de CARXO (carxo.com.mx).
          </div>
        </div>
      </body>
      </html>
    `

    // 2. PLANTILLA EJECUTIVA DE CONFIRMACIÓN PARA EL CLIENTE (Auto-responder)
    const customerHtmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Solicitud CARXO</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 30px 12px; color: #111827; }
          .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; border-top: 4px solid #8A1B1B; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03); }
          .header { padding: 24px 28px 16px 28px; border-bottom: 1px solid #f3f4f6; }
          .brand-title { font-size: 15px; font-weight: 800; color: #111827; letter-spacing: -0.2px; text-transform: uppercase; margin: 0; }
          .content { padding: 28px; }
          .greeting { font-size: 16px; font-weight: 700; color: #111827; margin-bottom: 12px; }
          .paragraph { font-size: 14px; line-height: 1.6; color: #374151; margin-bottom: 20px; }
          .summary-card { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px 20px; margin-bottom: 20px; }
          .summary-item { font-size: 13px; color: #4b5563; margin-bottom: 6px; }
          .summary-item:last-child { margin-bottom: 0; }
          .summary-item strong { font-weight: 700; color: #111827; }
          .contact-footer { border-top: 1px solid #f3f4f6; padding-top: 20px; font-size: 13px; color: #6b7280; line-height: 1.5; }
          .footer { background-color: #f9fafb; padding: 16px 28px; font-size: 11px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand-title">CARXO <span style="color:#6b7280; font-weight:400;">| Servicios Especializados (REPSE)</span></div>
          </div>
          <div class="content">
            <div class="greeting">Estimado(a) ${nombre},</div>
            <div class="paragraph">
              Agradecemos su interés en los servicios de recolección, transporte y gestión ambiental de CARXO. Confirmamos la recepción de los requerimientos de <strong>${empresa}</strong> para la evaluación de residuos.
            </div>
            
            <div class="summary-card">
              <div class="summary-item"><strong>Folio de atención:</strong> ${folioId}</div>
              <div class="summary-item"><strong>Empresa registrada:</strong> ${empresa}</div>
              <div class="summary-item"><strong>Residuo especificado:</strong> ${tipoResiduo}</div>
              <div class="summary-item"><strong>Fecha de registro:</strong> ${fechaHora}</div>
            </div>

            <div class="paragraph">
              Un Ingeniero Ambiental especialista en normatividad HSE revisará las especificaciones de su empresa y se pondrá en contacto directo en un plazo estimado no mayor a 24 horas hábiles.
            </div>

            <div class="contact-footer">
              <strong>Atención Inmediata & Cotizaciones:</strong><br>
              Línea Nacional Sin Costo: <strong>800-ECO-TRANS</strong> (800-326-8726)<br>
              Correo Electrónico: <strong>cotizaciones@carxo.com.mx</strong>
            </div>
          </div>
          <div class="footer">
            &copy; CARXO Servicios Especializados S.A. de C.V. &bull; Transporte y Manejo Integral de Residuos Peligrosos.
          </div>
        </div>
      </body>
      </html>
    `

    // OPCIÓN A: Si se configuró Microsoft Graph API
    const azureTenantId = process.env.AZURE_TENANT_ID
    const azureClientId = process.env.AZURE_CLIENT_ID
    const azureClientSecret = process.env.AZURE_CLIENT_SECRET

    if (azureTenantId && azureClientId && azureClientSecret) {
      // 1. Enviar notificación a Gerencia
      await sendEmailWithGraphApi({
        tenantId: azureTenantId,
        clientId: azureClientId,
        clientSecret: azureClientSecret,
        fromEmail: senderEmail,
        toEmail: recipientEmail,
        replyToEmail: correo,
        subject: `[Cotización ${folioId}] Nueva solicitud de ${empresa} - ${nombre}`,
        htmlContent: adminHtmlContent,
      })

      // 2. Enviar confirmación automática al cliente
      try {
        await sendEmailWithGraphApi({
          tenantId: azureTenantId,
          clientId: azureClientId,
          clientSecret: azureClientSecret,
          fromEmail: senderEmail,
          toEmail: correo,
          replyToEmail: recipientEmail,
          subject: `[CARXO] Confirmación de Solicitud de Evaluación (${folioId})`,
          htmlContent: customerHtmlContent,
        })
      } catch (errConfirm) {
        console.warn('Advertencia: No se pudo enviar el correo de confirmación al cliente:', errConfirm)
      }

      return NextResponse.json({
        success: true,
        folio: folioId,
        message: 'Solicitud registrada y confirmación enviada.',
      })
    }

    // OPCIÓN B: SMTP Tradicional Nodemailer
    const smtpHost = process.env.SMTP_HOST || 'smtp.office365.com'
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          success: false,
          message: 'Credenciales de Microsoft 365 no configuradas en .env.local.',
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
      tls: { ciphers: 'SSLv3', rejectUnauthorized: false },
    })

    // 1. Enviar correo interno a Gerencia
    await transporter.sendMail({
      from: `"CARXO Formulario Web" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: correo,
      subject: `[Cotización ${folioId}] Nueva solicitud de ${empresa} - ${nombre}`,
      html: adminHtmlContent,
    })

    // 2. Enviar correo de confirmación al cliente
    try {
      await transporter.sendMail({
        from: `"CARXO Servicios Especializados" <${smtpUser}>`,
        to: correo,
        replyTo: recipientEmail,
        subject: `[CARXO] Confirmación de Solicitud de Evaluación (${folioId})`,
        html: customerHtmlContent,
      })
    } catch (errConfirm) {
      console.warn('Advertencia: No se pudo enviar confirmación al cliente vía SMTP:', errConfirm)
    }

    return NextResponse.json({
      success: true,
      folio: folioId,
      message: 'Solicitud registrada y confirmación enviada.',
    })
  } catch (error: unknown) {
    console.error('Error al procesar solicitud de contacto:', error)
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
    return NextResponse.json(
      {
        success: false,
        message: 'No se pudo enviar la solicitud. Verifique su conexión o credenciales.',
        error: errorMessage,
      },
      { status: 500 }
    )
  }
}

// Función auxiliar para enviar correos usando Microsoft Graph API
async function sendEmailWithGraphApi({
  tenantId,
  clientId,
  clientSecret,
  fromEmail,
  toEmail,
  replyToEmail,
  subject,
  htmlContent,
}: {
  tenantId: string
  clientId: string
  clientSecret: string
  fromEmail: string
  toEmail: string
  replyToEmail: string
  subject: string
  htmlContent: string
}) {
  const tokenResponse = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    }
  )

  const tokenData = await tokenResponse.json()
  if (!tokenResponse.ok || !tokenData.access_token) {
    throw new Error(
      `Error de autenticación con Microsoft Graph: ${tokenData.error_description || JSON.stringify(tokenData)}`
    )
  }

  const sendMailResponse = await fetch(
    `https://graph.microsoft.com/v1.0/users/${fromEmail}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          subject: subject,
          body: {
            contentType: 'HTML',
            content: htmlContent,
          },
          toRecipients: [
            {
              emailAddress: {
                address: toEmail,
              },
            },
          ],
          replyTo: [
            {
              emailAddress: {
                address: replyToEmail,
              },
            },
          ],
        },
        saveToSentItems: 'false',
      }),
    }
  )

  if (!sendMailResponse.ok) {
    const errorText = await sendMailResponse.text()
    throw new Error(`Microsoft Graph rechazo el envío: ${errorText}`)
  }
}
