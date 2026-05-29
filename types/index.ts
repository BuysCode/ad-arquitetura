import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z
    .email("E-mail inválido")
    .min(5, "E-mail muito curto"),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .regex(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Formato: (99) 99999-9999"),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem muito longa"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export type BrevoSenderData = {
  name: string
  email: string
  phone: string
  message: string
}

export type Email = `${string}@${string}.${string}`

export type SendResult = {
  success: boolean
  message: string
  error?: string
  data?: unknown
}