"use client"

import { useState } from "react"
import { Input } from "../input"
import { ProductCard } from "../product-card/product-card"

interface Product {
  id: number
  title: string
  price: string
  imageUrl: string
  imageAlt: string
}

interface SearchBarProps {
  products: Product[]
  placeholder?: string
}

export function SearchBar({ products, placeholder = "Search products..." }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search products"
      />

{query.length > 0 && (
  <div className="space-y-2">
    <p className="text-sm font-medium text-muted-foreground">Suggestions</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            imageAlt={product.imageAlt}
          />
        ))
      ) : (
        <p className="text-sm text-muted-foreground">No results found.</p>
      )}
    </div>
  </div>
)}

    </div>
  )
}
