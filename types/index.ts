import { z } from 'zod'

export type Email = `${string}@${string}.${string}`
export type PhoneNumber = `(${number}) ${number}-${number}`

export const contactFormSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  email: z.email(),
  message: z.string()
})

export type TSenderData = {
  email: Email;
  phoneNumber: PhoneNumber;
  name: string;
}

export type ContactFormType = z.infer<typeof contactFormSchema>