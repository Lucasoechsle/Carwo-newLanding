"use client"

import { useState } from "react"
import ProductFilter from "@/components/product-filter"
import ProductGrid from "@/components/product-grid"

export default function ProductsPageClient() {
  const [filteredCategories, setFilteredCategories] = useState<string[]>([])

  const handleFilterChange = (categories: string[]) => {
    setFilteredCategories(categories)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nuestros Productos</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <ProductFilter onFilterChange={handleFilterChange} />
        <ProductGrid filteredCategories={filteredCategories} />
      </div>
    </main>
  )
}

