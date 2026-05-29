"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react"
import { SendMessage } from "@/lib/vendors/sendMessage"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from "@/types"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit: submitForm,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const messageValue = watch("message")

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const result = await SendMessage({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      })

      if (result.success) {
        setSubmitStatus('success')
        reset()

        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error(result.message || "Erro ao enviar mensagem")
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : "Erro inesperado. Tente novamente.")

      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const numbers = rawValue.replace(/\D/g, '')

    let formatted = numbers
    if (numbers.length <= 2) {
      formatted = numbers
    } else if (numbers.length <= 7) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else if (numbers.length <= 11) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    } else {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    }

    setValue("phone", formatted, { shouldValidate: true, shouldDirty: true })
  }

  return (
    <section id="contato" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Vamos Conversar
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Adoraria ouvir suas ideias e ajudar a
            transformar seu espaço em algo extraordinário.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-xl text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:contato@studioarq.com.br"
                  className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contato@studioarq.com.br</span>
                </a>
                <a
                  href="tel:+5551981684260"
                  className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+55 (51) 98168-4260</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Porto Alegre, Rio Grande do Sul — Brasil</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-foreground mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/adstudio.arquitetura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                  aria-label="Pinterest"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={submitForm(handleSubmit)} className="bg-card border border-border p-8 lg:p-10">
              <div className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm">{errorMessage || "Erro ao enviar mensagem. Tente novamente."}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm tracking-wide text-foreground mb-2"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className={`w-full px-4 py-3 bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors rounded-md ${errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-border focus:border-accent"
                        }`}
                      placeholder="Seu nome"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm tracking-wide text-foreground mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors rounded-md ${errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-border focus:border-accent"
                        }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm tracking-wide text-foreground mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-3 bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors rounded-md ${errors.phone
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-border focus:border-accent"
                      }`}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm tracking-wide text-foreground mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className={`w-full px-4 py-3 bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-none rounded-md ${errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-border focus:border-accent"
                      }`}
                    placeholder="Conte-me sobre seu projeto..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-muted-foreground text-right">
                    {messageValue?.length || 0}/1000
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}