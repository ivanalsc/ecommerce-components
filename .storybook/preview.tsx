import "../src/app/globals.css"
import type { Preview } from "@storybook/react"
import { Toaster } from "../src/components/ui/sonner"
import React from "react"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      element: "#root",
      config: {},
      options: {
        checks: { colorContrast: true },
        restoreScroll: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster theme="light" position="top-right" />
      </>
    ),
  ],
}

export default preview
