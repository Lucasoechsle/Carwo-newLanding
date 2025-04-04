"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    if (pathname !== "/") {
      return
    }

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { name: "Inicio", href: "/", section: null },
    { name: "Nosotros", href: "/#empresa", section: "empresa" },
    { name: "Productos Destacados", href: "/#productos", section: "productos" },
    { name: "Productos", href: "/productos", section: null },
    { name: "Contacto", href: "/#contacto", section: "contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="ml-10">
            <Image src="/carwo_logo.svg" alt="logo" width={125} height={125} />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2 items-center">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.section ? (
                <button
                  onClick={() => scrollToSection(item.section!)}
                  className="inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.section ? (
                    <button
                      onClick={() => scrollToSection(item.section!)}
                      className="text-lg font-medium transition-colors hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded w-full text-left"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}