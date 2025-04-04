import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CompanySection() {
  return (
    <section id="empresa" className="w-full py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nosotros</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Carwo Empresa"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <p className="text-lg mb-6">
              En Carwo comercializamos una amplia variedad de productos para satisfacer sus necesidades en cuanto a
              generación y almacenamiento de energía se refiere.
            </p>

            <p className="text-lg mb-6">
              Nuestro compromiso es ofrecer soluciones energéticas de alta calidad, eficientes y sostenibles que se
              adapten a las necesidades específicas de cada cliente.
            </p>

            <p className="text-lg mb-8">
              Con años de experiencia en el sector, nos hemos consolidado como un referente en el mercado de la energía,
              brindando asesoramiento especializado y productos de vanguardia.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-white hover:text-black border-black hover:border-black"
            >
              <a href="/productos">Ver Nuestros Productos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

