import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import productosData from "@/data/productos-data"
import { notFound } from "next/navigation"

export default function ProductoDetalle({ params }: { params: { id: string } }) {
  const producto = productosData.find((p) => p.id === Number.parseInt(params.id))

  if (!producto) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/productos" className="inline-flex items-center mb-8">
        <Button variant="outline" className="flex items-center gap-2 hover:bg-black hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Volver a Productos
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-square w-full max-w-xl mx-auto">
          <Image
            src={producto.image || "/placeholder.svg?height=600&width=600"}
            alt={producto.name}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{producto.name}</h1>
          <div className="mb-4 inline-block px-3 py-1 bg-gray-100 text-sm rounded-full">{producto.category}</div>
          <div className="mt-6 space-y-4">
            <p className="text-lg whitespace-pre-line">{producto.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  )
}