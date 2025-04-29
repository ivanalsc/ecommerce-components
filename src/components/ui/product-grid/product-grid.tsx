import { ProductCard } from "../product-card/product-card"

interface Product {
  id: number
  imageUrl: string
  imageAlt: string
  title: string
  price: string
  isOutOfStock?: boolean
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          imageAlt={product.imageAlt}
          title={product.title}
          price={product.price}
          isOutOfStock={product.isOutOfStock}
        />
      ))}
    </div>
  )
}
