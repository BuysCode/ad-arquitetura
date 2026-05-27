"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Paola Pereira",
    rating: 5,
    comment:
      "Nossa, ficou maravilhoso! Muito obrigado por esse carinho todo na apresentação, O vídeo e a música deixaram outra vibe, e ainda mais especial!! Vocês arrasaram muito no projeto e na entrega!",
  },
  {
    name: "Brenda Diaz",
    rating: 5,
    comment:
      "Minha sala ficou perfeita, do jeito que eu sempre sonhei!",
  },
  {
    name: "Agnes Sá",
    rating: 5,
    comment:
      "Amei o projeto da clínica, uma cliente foi ontem e elogiou horrores, obrigada!",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating
            ? "fill-amber-400 text-amber-400"
            : "fill-muted text-muted"
            }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="avaliacoes" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Depoimentos
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl font-light text-foreground text-balance">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            A satisfação dos nossos clientes é nossa maior conquista. Confira o
            que eles têm a dizer sobre nossos projetos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-foreground">
                    {testimonial.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}