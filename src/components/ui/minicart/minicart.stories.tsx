import type { Meta, StoryObj } from "@storybook/react"
import { MiniCart } from "./minicart"

const meta: Meta<typeof MiniCart> = {
  title: "Components/MiniCart",
  component: MiniCart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### MiniCart Component

The **MiniCart** is a floating dropdown/cart drawer used to display the current items in a user's shopping cart.

This initial version includes:
- Accessible toggle button with \`aria-label\`
- Dialog-based dropdown with ESC and outside click close
- Focus management for keyboard users

---
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof MiniCart>

export const Default: Story = {
  render: () => <MiniCart />,
}
