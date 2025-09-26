import type { Metadata } from "next"
import ProductsPageClient from "./ProductsPageClient"

export const metadata: Metadata = {
  title: "Productos - Carwo",
  description: "Explore nuestra amplia gama de productos para generación y almacenamiento de energía.",
}

export default function ProductsPage() {
  return <ProductsPageClient />
}