"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const banners = [
  {
    id: 1,
    title: "Soluciones de Energía Renovable",
    description: "Descubra nuestra gama de productos para generación de energía limpia",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Ver Productos",
    link: "/productos",
  },
  {
    id: 2,
    title: "Almacenamiento de Energía",
    description: "Sistemas de almacenamiento eficientes para todas sus necesidades",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Conocer Más",
    link: "/#empresa",
  },
  {
    id: 3,
    title: "Tecnología de Vanguardia",
    description: "Innovación y calidad en cada uno de nuestros productos",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Contactar",
    link: "/#contacto",
  },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="banner" className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="relative min-w-full h-full">
            <Image src={banner.image || "/placeholder.svg"} alt={banner.title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-xl text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">{banner.title}</h1>
                  <p className="text-lg md:text-xl mb-6">{banner.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-black text-white hover:bg-white hover:text-black">
                      <Link href="/#puntos-de-venta">Quiero comprar</Link>
                    </Button>
                    <Button asChild size="lg" className="bg-white text-black hover:bg-black hover:text-white">
                      <Link href="/#contacto?tipo=vendedor">Quiero vender</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-black hover:text-white z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-black hover:text-white z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Siguiente</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

