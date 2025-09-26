"use client"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react"
import productosData from "@/data/productos-data"

export default function ProductFilter({ onFilterChange }: { onFilterChange: (categories: string[]) => void }) {
  const [isFilterVisible, setIsFilterVisible] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
  })

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(productosData.map((product) => product.category)))
    return uniqueCategories.map((category) => ({
      id: category.toLowerCase().replace(/\s+/g, "-"),
      label: category,
    }))
  }, [])

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible)
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) => {
      if (checked) {
        return [...prev, category]
      } else {
        return prev.filter((c) => c !== category)
      }
    })
  }

  const applyFilters = () => {
    onFilterChange(selectedCategories)
  }

  return (
    <div className="relative">
      <div className="flex md:hidden justify-between items-center mb-4">
        <Button
          variant="outline"
          onClick={toggleFilter}
          className="flex items-center gap-2 hover:bg-black hover:text-white"
        >
          <Filter className="h-4 w-4" />
          {isFilterVisible ? "Ocultar Filtros" : "Mostrar Filtros"}
        </Button>
      </div>
      <div className={`${isFilterVisible ? "block" : "hidden"} md:block w-full md:w-64 bg-white p-4 rounded-lg border`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Filtros</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFilterVisible(false)}
            className="md:hidden hover:bg-black hover:text-white"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </div>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <button
              className="flex justify-between items-center w-full text-left font-medium mb-2"
              onClick={() => toggleSection("categories")}
            >
              Categorías
              {expandedSections.categories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {expandedSections.categories && (
              <div className="space-y-2 mt-2 max-h-[300px] overflow-y-auto pr-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.label)}
                      onCheckedChange={(checked) => handleCategoryChange(category.label, checked as boolean)}
                    />
                    <Label htmlFor={category.id} className="text-sm font-normal cursor-pointer">
                      {category.label}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button
            className="w-full bg-black text-white hover:bg-white hover:text-black border border-black"
            onClick={applyFilters}
          >
            Aplicar Filtros
          </Button>
        </div>
      </div>
    </div>
  )
}