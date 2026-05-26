export function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-4/5 bg-secondary">
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-serif text-8xl text-muted-foreground/20">A</span>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-accent/30 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Sobre Mim
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8">
              Ana Costa
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sou arquiteta apaixonada por criar espaços que contam histórias.
                Com mais de 10 anos de experiência, desenvolvi uma abordagem única
                que une funcionalidade, estética e a essência de cada cliente.
              </p>
              <p>
                Formada pela Universidade de São Paulo (USP) com especialização
                em Design de Interiores, acredito que cada projeto é uma oportunidade
                de transformar a forma como as pessoas vivem e se relacionam com
                seus ambientes.
              </p>
              <p>
                Meu trabalho é guiado pelo minimalismo consciente — onde cada elemento
                tem propósito e significado. Busco criar espaços que respiram,
                acolhem e inspiram.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8 pt-10 border-t border-border">
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-foreground mb-1">10+</p>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">Anos de Experiência</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-foreground mb-1">150+</p>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">Projetos Realizados</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-foreground mb-1">50+</p>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
