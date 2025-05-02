"use client"

import { Button } from "../button/button"
import { Loader2 } from "lucide-react"

interface LoadMoreProps {
  isLoading?: boolean
  hasMore: boolean
  onLoadMore: () => void
}

export function LoadMore({ isLoading = false, hasMore, onLoadMore }: LoadMoreProps) {
  if (!hasMore) return null

  return (
    <div className="mt-6 flex justify-center">
      <Button
        onClick={onLoadMore}
        disabled={isLoading}
        aria-label="Load more content"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </span>
        ) : (
          "Show more"
        )}
      </Button>
    </div>
  )
}
