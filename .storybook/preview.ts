import "../src/app/globals.css"; // Import your Tailwind CSS globally

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // Accessibility settings
    element: "#root", // where Storybook renders components
    config: {}, // default axe-core config
    options: {
      checks: { colorContrast: true }, // ensure good contrast too
      restoreScroll: true,
    },
  },
};
