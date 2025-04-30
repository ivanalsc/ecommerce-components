import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./badge"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "destructive", "outline"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
  ### Badge Component
  
  The **Badge** is a small visual indicator used to highlight status, tags, or quick metadata.
  
  ---
  
  ### Variants
  
  - **default**: Neutral tag
  - **success**: Positive states (e.g. In Stock, New)
  - **destructive**: Alerts or negative states (e.g. Out of Stock)
  - **outline**: Subtle styling for non-intrusive tags
  
  ---
  
  ### Accessibility
  
  - Uses semantic \`<div>\`, but can be replaced with \`<span>\` or \`<p>\` for specific contexts.
  - Has sufficient contrast and rounded shape for easy scanning.
  
  ---
        `,
      },
    },
  }
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: "Default",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    children: "In Stock",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Out of Stock",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Limited",
  },
}
