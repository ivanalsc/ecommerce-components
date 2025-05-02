import type { Meta, StoryObj } from "@storybook/react"
import { SearchBar } from "./search-bar"

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
  ### SearchBar Component
  
  The **SearchBar** provides a real-time search interface to filter a list of products based on title.
  
  It displays matching results using \`ProductCard\` components.
  
  Props:
  
  - \`products\`: An array of products to filter.
  - \`placeholder\`: Optional input placeholder text.
  
  Includes basic accessibility, keyboard support, and a fallback "No results" message.
        `,
      },
    },
  },
  
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Demo: Story = {
  render: () => {
    const products = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Product ${i + 1}`,
      price: `$${(10 + i * 5).toFixed(2)}`,
      imageUrl: "https://images.unsplash.com/photo-1705614055108-93b3985a0999?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: `Product ${i + 1}`,
    }))

    return (
      <div className="p-6">
        <SearchBar products={products} />
      </div>
    )
  },
}
