import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const portfolioItems = [
  {
    title: "Residência Jardins",
    category: "Residencial",
    description: "Integração entre áreas internas e externas",
  },
  {
    title: "Apartamento Vila Nova",
    category: "Interiores",
    description: "Minimalismo e funcionalidade em 85m²",
  },
  {
    title: "Escritório Criativo",
    category: "Comercial",
    description: "Espaço colaborativo com identidade única",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Trabalhos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Portfólio
            </h2>
          </div>

          <Link
            href="https://www.canva.com/design/SEU_LINK_AQUI/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
          >
            <span className="text-sm tracking-wide">Ver todos os projetos</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              href="https://www.canva.com/design/SEU_LINK_AQUI/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="font-serif text-6xl text-muted-foreground/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {item.category}
              </p>
              <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://www.canva.com/design/SEU_LINK_AQUI/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground text-sm tracking-wide hover:bg-secondary transition-colors"
          >
            Explorar Portfólio Completo
          </Link>
        </div>
      </div>
    </section>
  )
}
