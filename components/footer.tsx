import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-medium tracking-tight text-foreground"
            >
              Studio Arq
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Arquitetura & Design de Interiores
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Studio Arq. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              São Paulo, Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
