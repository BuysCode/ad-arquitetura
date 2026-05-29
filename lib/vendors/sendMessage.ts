import type { Email, BrevoSenderData, SendResult } from "@/types"
import { brevo } from "./brevoConfig"

export async function SendMessage(senderData: BrevoSenderData): Promise<SendResult> {
  const { name, email, phone, message } = senderData

  const textContent = `
Nova mensagem do formulário de contato:

👤 Nome: ${name}
📧 E-mail: ${email}
📱 Telefone: ${phone}

💬 Mensagem:
${message}
  `.trim()

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; border-radius: 8px 8px 0 0; }
    .header h1 { color: white; margin: 0; font-size: 20px; }
    .content { background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: 600; color: #475569; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; }
    .value { margin-top: 4px; color: #1e293b; font-size: 16px; }
    .message { background: white; padding: 16px; border-radius: 6px; border-left: 4px solid #667eea; margin-top: 8px; }
    .footer { margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <h1>📬 Nova Mensagem de Contato</h1>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">👤 Nome</div>
      <div class="value">${escapeHtml(name)}</div>
    </div>
    <div class="field">
      <div class="label">📧 E-mail</div>
      <div class="value">
        <a href="mailto:${escapeHtml(email)}" style="color: #667eea; text-decoration: none;">
          ${escapeHtml(email)}
        </a>
      </div>
    </div>
    <div class="field">
      <div class="label">📱 Telefone</div>
      <div class="value">${escapeHtml(phone)}</div>
    </div>
    <div class="field">
      <div class="label">💬 Mensagem</div>
      <div class="message">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
    </div>
  </div>
  <div class="footer">
    Enviado via formulário de contato em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}
  </div>
</body>
</html>
  `.trim()

  try {
    const toEmail = process.env.TO_EMAIL as Email
    const toName = process.env.TO_NAME as string

    if (!toEmail || !toName) {
      console.error("Variáveis de ambiente TO_EMAIL ou TO_NAME não configuradas")
      return {
        success: false,
        message: "Erro de configuração no servidor",
        error: "Missing environment variables"
      }
    }

    const response = await brevo.transactionalEmails.sendTransacEmail({
      subject: `📬 Novo Contato: ${name}`,
      sender: {
        name,
        email
      },
      to: [
        {
          email: toEmail,
          name: toName
        }
      ],
      replyTo: {
        email: email,
        name: name
      },
      textContent: textContent,
      htmlContent: htmlContent,
      tags: ["contato", "site", "formulario"]
    })

    if (response.messageId) {
      console.log("✅ E-mail enviado com sucesso:", response.messageId)
      return {
        success: true,
        message: "Mensagem enviada com sucesso!",
        data: { messageId: response.messageId }
      }
    }

    throw new Error("Resposta inesperada da API do Brevo")

  } catch (error) {
    console.error("❌ Erro ao enviar e-mail:", error)

    if (error instanceof Error) {
      if (error.message.includes("timeout")) {
        return {
          success: false,
          message: "Tempo de resposta esgotado. Tente novamente.",
          error: "Timeout error"
        }
      }
      if (error.message.includes("401") || error.message.includes("403")) {
        return {
          success: false,
          message: "Erro de autenticação. Contate o administrador.",
          error: "Auth error"
        }
      }
    }

    return {
      success: false,
      message: "Não foi possível enviar sua mensagem. Tente novamente em instantes.",
      error: error instanceof Error ? error.message : "Unknown error"
    }
  }
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}