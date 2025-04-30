import Image from "next/image"
import { Button } from "@/components/ui/button/button"
import { Badge } from "../badge/badge"
import { useCartStore } from "@/lib/stores/cart"

interface ProductCardProps {
  imageUrl: string
  imageAlt: string
  title: string
  price: string 
  isOutOfStock?: boolean
}

export function ProductCard({
  imageUrl,
  imageAlt,
  title,
  price,
  isOutOfStock = false,
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    const numericPrice = parseFloat(price.replace("$", ""))

    addItem({
      id: Math.floor(Math.random() * 100000), // ID simulado, idealmente viene del producto real
      title,
      price: numericPrice,
      quantity: 1,
      imageUrl,
    })
  }

  return (
    <div className="group relative w-[300px] rounded-lg border p-4 shadow-sm transition hover:shadow-md">
      <div className="relative w-full overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={300}
          height={300}
          className="object-cover"
        />
        {isOutOfStock && (
          <Badge variant="destructive">
            Out of Stock
          </Badge>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-gray-700">{price}</p>

        <Button
          variant="default"
          disabled={isOutOfStock}
          className="w-full mt-2"
          onClick={handleAddToCart}
        >
          {isOutOfStock ? "Unavailable" : "Add to Cart"}
        </Button>
      </div>
    </div>
  )
}
