export default defineAppConfig({
  ui: {
    primary: "medium-purple",
    gray: "zinc",
    variables: {
      light: {
        background: "var(--color-gray-50)",
        foreground: "var(--color-gray-900)",
      },
      dark: {
        background: "var(--color-gray-900)",
        foreground: "var(--color-gray-200)",
      },
    },
    // button: {
    //   variant: {
    //     solid: "dark:text-white",
    //   },
    // },
    icons: {
      dark: "i-ri-moon-fill",
      light: "i-ri-sun-fill",
      system: "i-ri-computer-line",
      search: "i-ri-search-line",
      external: "i-ri-external-link-line",
      chevron: "i-ri-arrow-down-s-line",
      hash: "i-ri-links-line",
    },
    content: {
      prose: {
        code: {
          icon: {
            php: "i-ri-braces-line",
            yml: "i-ri-braces-line",
          },
          button: {
            icon: {
              copy: "i-ri-file-copy-line",
              copied: "i-ri-checkbox-circle-line",
            },
          },
        },
      },
    },
  },
});
