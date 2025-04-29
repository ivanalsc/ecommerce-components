import type { Meta, StoryObj } from "@storybook/react"
import { ProductGrid } from "./product-grid"
import { ProductGridSkeleton } from "./product-grid-skeleton"

const meta: Meta<typeof ProductGrid> = {
    title: "Components/ProductGrid",
    component: ProductGrid,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
  ### Product Grid Component
  
  The **ProductGrid** component organizes multiple **ProductCard** components into a responsive grid layout.
  
  It adjusts automatically based on the screen size:
  - **Mobile (default)**: 1 column
  - **Tablet (sm)**: 2 columns
  - **Desktop (md and up)**: 3 columns
  
  ---
  
  ### Features
  
  - Dynamically renders a list of products.
  - Reuses the **ProductCard** component for consistency.
  - Handles different stock statuses (in stock, out of stock).
  - Fully responsive layout using Tailwind CSS Grid utilities.
  - Accessible structure for easy navigation and screen readers.
  
  ---
  
  This component is ideal for building product listing pages, featured sections, or search results in an e-commerce application.
          `,
        },
      },
    },
  }
export default meta
type Story = StoryObj<typeof ProductGrid>

const products = [
  {
    id: 1,
    imageUrl: "https://plus.unsplash.com/premium_photo-1723773743655-71e6b5961089?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Sneakers",
    title: "White Sneakers",
    price: "$79.99",
    isOutOfStock: false,
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1528384389982-64b0c3dbc32f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Backpack",
    title: "Black Backpack",
    price: "$49.99",
    isOutOfStock: false,
  },
  {
    id: 3,
    imageUrl: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Headphones",
    title: "Wireless Headphones",
    price: "$99.99",
    isOutOfStock: true,
  },
]

export const Default: Story = {
  args: {
    products,
  },
}
export const Loading: Story = {
    render: () => <ProductGridSkeleton count={6} />,
  }