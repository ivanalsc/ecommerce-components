import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import { Settings } from "lucide-react"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
  ### Button Component
  
  The **Button** component is used to trigger actions across the application.
  
  It supports multiple variants for different use cases:
  - **Default**: For primary actions (e.g., "Add to Cart", "Save", "Submit").
  - **Secondary**: For secondary actions (e.g., "Cancel", "Back", "Maybe Later").
  - **Ghost**: For very subtle actions or links that look like text buttons.
  - **Icon**: For buttons that only contain an icon (must use \`aria-label\` for accessibility).
  
  ---
  
  ### Accessibility notes
  - Always use a real \`<button>\` element for action triggers.
  - Always provide a clear label or \`aria-label\` (especially for icon-only buttons).
  - Make sure focus rings are clearly visible for keyboard users.
  - Disabled buttons use native \`disabled\` attribute and show reduced opacity.
  
  ---
          `
        }
      }
    },
    argTypes: {
      variant: {
        control: { type: "select" },
        options: ["default", "secondary", "ghost", "icon"],
      },
      isLoading: {
        control: "boolean",
      },
      disabled: {
        control: "boolean",
      },
    },
  };

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Default Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
}

export const Icon: Story = {
  args: {
    variant: "icon",
    children: <Settings className="h-4 w-4" />,
    "aria-label": "Settings",
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Loading...",
  },
}
