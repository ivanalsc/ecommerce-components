import type { Meta, StoryObj } from "@storybook/react"
import { LoadMore } from "./load-more"
import { useState } from "react"
import { ProductCard } from "../product-card/product-card"

const meta: Meta<typeof LoadMore> = {
  title: "Components/LoadMore",
  component: LoadMore,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LoadMore>

export const InContext: Story = {
  render: () => {
    const allProducts = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Product ${i + 1}`,
      price: `$${(20 + i * 5).toFixed(2)}`,
      imageUrl: "https://images.unsplash.com/photo-1705614055108-93b3985a0999?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: `Product ${i + 1}`,
    }))

    const itemsPerPage = 6
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const visibleProducts = allProducts.slice(0, page * itemsPerPage)
    const hasMore = visibleProducts.length < allProducts.length

    const loadMore = () => {
      setLoading(true)
      setTimeout(() => {
        setPage((prev) => prev + 1)
        setLoading(false)
      }, 1000)
    }

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              imageAlt={product.imageAlt}
            />
          ))}
        </div>
        <LoadMore isLoading={loading} hasMore={hasMore} onLoadMore={loadMore} />
      </div>
    )
  },
}
export const Default: Story = {
    args: {
      isLoading: false,
      hasMore: true,
      onLoadMore: () => alert("Clic!"),
    },
  }