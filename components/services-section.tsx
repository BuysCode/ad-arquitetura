"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Light",
    description: "Ideal para pequenas transformações",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    features: [
      "Consultoria inicial de 2 horas",
      "Planta de layout básica",
      "Paleta de cores sugerida",
      "Lista de compras orientativa",
      "1 revisão inclusa",
    ],
    highlighted: false,
  },
  {
    name: "Essencial",
    description: "O equilíbrio perfeito entre design e praticidade",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
    features: [
      "Consultoria completa presencial",
      "Projeto de layout detalhado",
      "Especificação de materiais",
      "Moodboard personalizado",
      "Acompanhamento de execução",
      "3 revisões inclusas",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    description: "Experiência completa e exclusiva",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
    features: [
      "Projeto arquitetônico completo",
      "Design de interiores personalizado",
      "Renderização 3D realista",
      "Gerenciamento de obras",
      "Curadoria de mobiliário",
      "Acompanhamento integral",
      "Revisões ilimitadas",
    ],
    highlighted: false,
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Serviços
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light text-foreground text-balance">
            Soluções sob Medida
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-balance">
            Cada projeto é único. Escolha o plano que melhor se adapta às suas necessidades
            e transforme seu espaço com design profissional.
          </p>
        </div>

        {/* Móveis Soltos e Modulados */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto md:min-h-100">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                  alt="Móveis Soltos e Modulados"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm uppercase tracking-widest text-accent">
                  Serviço Especializado
                </span>
                <h3 className="mt-4 font-serif text-3xl md:text-4xl font-light text-foreground">
                  Móveis Soltos e Modulados
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Projetos personalizados de marcenaria que combinam funcionalidade
                  e estética. Desenvolvemos peças únicas que se adaptam perfeitamente
                  ao seu espaço, desde estantes e armários até mesas e bancadas.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Projeto personalizado de marcenaria",
                    "Otimização de espaços",
                    "Materiais de alta qualidade",
                    "Acompanhamento da fabricação",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <Check className="h-5 w-5 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    variant="default"
                    size="lg"
                    className="rounded-full"
                    onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Planos */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground">
            Planos de Projeto
          </h3>
          <p className="mt-3 text-muted-foreground">
            Valores sob consulta, de acordo com a complexidade do projeto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl bg-card border transition-all duration-300 hover:shadow-lg ${plan.highlighted
                ? "border-accent shadow-md scale-[1.02]"
                : "border-border hover:border-accent/50"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-accent text-accent-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className="relative h-48">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h4 className="font-serif text-2xl text-foreground">{plan.name}</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full rounded-full"
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}