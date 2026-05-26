import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const inspirationCategories = [
  { title: "Minimalismo", count: "124 pins" },
  { title: "Texturas Naturais", count: "89 pins" },
  { title: "Iluminação", count: "156 pins" },
  { title: "Cores Neutras", count: "203 pins" },
]

export function InspirationsSection() {
  return (
    <section id="inspiracoes" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Referências
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Inspirações Recentes
            </h2>
          </div>

          <Link
            href="https://pinterest.com/SEU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
          >
            <span className="text-sm tracking-wide">Ver no Pinterest</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {inspirationCategories.map((category, index) => (
            <Link
              key={index}
              href="https://pinterest.com/SEU_USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border p-6 lg:p-8 hover:border-accent/50 transition-colors"
            >
              <div className="aspect-square bg-muted mb-6 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-muted-foreground/20 rounded-full" />
              </div>
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors mb-1">
                {category.title}
              </h3>
              <p className="text-xs tracking-wide text-muted-foreground">
                {category.count}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://pinterest.com/SEU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
            Seguir no Pinterest
          </Link>
        </div>
      </div>
    </section>
  )
}
