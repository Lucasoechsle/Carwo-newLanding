"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Datos de ejemplo de distribuidores
const distributors = [
  {
    id: 1,
    name: "Distribuidor Central",
    address: "Av. Principal 123, Ciudad",
    phone: "+123 456 7890",
    coordinates: { lat: -34.6037, lng: -58.3816 },
  },
  {
    id: 2,
    name: "Sucursal Norte",
    address: "Calle Norte 456, Ciudad",
    phone: "+123 456 7891",
    coordinates: { lat: -34.6037, lng: -58.3816 },
  },
  {
    id: 3,
    name: "Sucursal Sur",
    address: "Calle Sur 789, Ciudad",
    phone: "+123 456 7892",
    coordinates: { lat: -34.6037, lng: -58.3816 },
  },
]

export default function DistributorsMap() {
  return (
    <section id="puntos-de-venta" className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Puntos de Venta</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentre el distribuidor más cercano a su ubicación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[500px] bg-gray-100 rounded-lg">
            {/* Aquí irá el mapa interactivo */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Mapa interactivo de distribuidores</p>
            </div>
          </div>

          <div className="space-y-4">
            {distributors.map((distributor) => (
              <Card key={distributor.id}>
                <CardHeader>
                  <CardTitle>{distributor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{distributor.address}</p>
                    <p className="text-muted-foreground">Tel: {distributor.phone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 