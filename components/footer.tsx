import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-lg font-bold mb-4">CARWO</h3>
            <p className="text-muted-foreground">Soluciones en generación y almacenamiento de energía.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#empresa" className="text-muted-foreground hover:text-black transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/#productos" className="text-muted-foreground hover:text-black transition-colors">
                  Productos Destacados
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-muted-foreground hover:text-black transition-colors">
                  Todos los Productos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-muted-foreground hover:text-black transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-muted-foreground">
              <p>Email: info@carwo.com</p>
              <p>Teléfono: +123 456 7890</p>
            </address>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground max-w-6xl mx-auto">
          <p>© {currentYear} Carwo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}