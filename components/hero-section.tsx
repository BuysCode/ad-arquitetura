import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 border border-border/50 rounded-full" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] border border-border/30 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Arquitetura & Design de Interiores
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] text-foreground mb-8">
            <span className="text-balance">
              Transformando espaços em{" "}
              <em className="italic text-accent">experiências</em>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Projetos que unem funcionalidade, estética e a essência de quem habita. 
            Cada espaço conta uma história única.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              Iniciar um Projeto
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground text-sm tracking-wide hover:bg-secondary transition-colors"
            >
              Ver Portfólio
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
