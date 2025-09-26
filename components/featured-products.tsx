import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import productosDestacadosData from "@/data/productos-destacados-data"

export default function FeaturedProducts() {
  return (
    <section id="productos" className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Productos Destacados</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nuestra selección de productos destacados en generación y almacenamiento de energía.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosDestacadosData.map((producto) => (
            <Card key={producto.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={producto.image || "/placeholder.svg?height=300&width=400"}
                  alt={producto.name}
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle>{producto.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3">{producto.descripcion}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-black text-white hover:bg-white hover:text-black border border-black"
                >
                  <Link href={`/productos/${producto.id}`}>Ver Detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="hover:bg-black hover:text-white">
            <Link href="/productos">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}