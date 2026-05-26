import { BookOpen, Sparkles } from "lucide-react"

export function CoursesSection() {
  return (
    <section id="cursos" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Educação
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Cursos
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card border border-border p-8 md:p-12 lg:p-16">
            {/* Coming Soon Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-xs tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                Em Breve
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-8">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">
                Compartilhando Conhecimento
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Estou preparando cursos exclusivos sobre arquitetura de interiores, 
                design funcional e como transformar ambientes com criatividade e propósito.
                Cadastre-se para ser notificado quando lançarmos.
              </p>

              <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Me Avise
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
