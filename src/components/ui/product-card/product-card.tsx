import Image from "next/image"
import { Button } from "@/components/ui/button/button"

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
          <div className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
            Out of Stock
          </div>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-gray-700">{price}</p>

        <Button
          variant="default"
          disabled={isOutOfStock}
          className="w-full mt-2"
        >
          {isOutOfStock ? "Unavailable" : "Add to Cart"}
        </Button>
      </div>
    </div>
  )
}
