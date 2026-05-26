import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  email: z.email(),
  message: z.string()
})

export type ContactFormType = z.infer<typeof contactFormSchema>