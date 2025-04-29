// src/components/ui/product-card-skeleton.tsx
import { Skeleton } from "./skeleton"

export function ProductCardSkeleton() {
  return (
    <div className="rounded-lg border p-4 shadow-sm w-[300px] ">
      <Skeleton className="h-[300px] w-full rounded-md" />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  )
}
