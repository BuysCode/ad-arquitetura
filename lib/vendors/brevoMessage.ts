import type { Email, TSenderData } from "@/types";
import { brevo } from "./brevoConfig";

export async function SendBrevoMessage(senderData: TSenderData) {
  const result = await brevo.transactionalEmails.sendTransacEmail({
    subject: "",
    sender: {
      email: senderData.email,
      name: senderData.name
    },
    to: [{
      email: process.env.TO_EMAIL as Email,
      name: process.env.TO_NAME as string
    }],
    textContent: ""
  }).then(() => {
    return "Mensagem enviada com sucesso!";
  }).catch(e => {
    console.error(e)
    return "Erro ao enviar mensagem!";
  })
}