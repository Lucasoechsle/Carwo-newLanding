"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import productosData from "@/data/productos-data"

export default function ProductGrid({ filteredCategories }: { filteredCategories: string[] }) {
  const [searchTerm, setSearchTerm] = useState("")

  // Filtrar productos por término de búsqueda y categorías
  const filteredProducts = productosData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = filteredCategories.length === 0 || filteredCategories.includes(product.category)

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex-1">
      <div className="mb-6">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar productos..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={product.image || "/placeholder.svg?height=300&width=400"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3">{product.descripcion}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-black text-white hover:bg-white hover:text-black border border-black"
                >
                  <Link href={`/productos/${product.id}`}>Ver Detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No se encontraron productos</h3>
          <p className="text-muted-foreground">Intente con otros términos de búsqueda o filtros.</p>
        </div>
      )}
    </div>
  )
}

