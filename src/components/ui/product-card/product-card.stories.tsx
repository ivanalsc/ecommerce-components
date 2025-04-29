import type { Meta, StoryObj } from "@storybook/react"
import { ProductCard } from "./product-card"
import { ProductCardSkeleton } from "./product-card-skeleton"

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### Product Card Component

The **ProductCard** component displays essential product information, including an image, title, price, and a call-to-action button.

It supports the following states:
- **Default**: Standard product card with an "Add to Cart" button.
- **Out of Stock**: Shows a red badge and disables the action button.
- **Loading (Skeleton)**: A placeholder version to use while data is being fetched.

---

### Accessibility Notes

- The product image requires a meaningful \`alt\` attribute.
- The title uses a semantic heading tag (\`<h3>\`) for screen readers.
- The button reflects its state via the native \`disabled\` attribute.
- Visual states like "Out of Stock" are clearly marked for all users.

---
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ProductCard>

// ✅ Default story (in stock)
export const Default: Story = {
  args: {
    imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Sunglasses",
    title: "Sunglasses",
    price: "$89.99",
    isOutOfStock: false,
  },
}

// ✅ Out of Stock story
export const OutOfStock: Story = {
  args: {
    imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Sunglasses",
    title: "Sunglasses",
    price: "$89.99",
    isOutOfStock: true,
  },
}

// ✅ Loading skeleton story
export const Loading: Story = {
  render: () => <ProductCardSkeleton />,
}
