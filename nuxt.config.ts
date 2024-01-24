export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],

  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-og-image",
  ],

  site: {
    url: "https://kirbycopilot.com",
  },

  content: {
    highlight: {
      theme: {
        light: "github-light",
        default: "github-light",
        dark: "github-dark",
      },
    },
  },

  image: {
    quality: 80,
    format: ["webp"],
  },

  ui: {
    icons: ["heroicons", "ri"],
  },

  fontMetrics: {
    fonts: ["Instrument Serif"],
  },

  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "Instrument+Serif": [400],
    },
  },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md`
    "components:extend": (components) => {
      const globals = components.filter((c) =>
        ["UBadge"].includes(c.pascalName),
      );
      for (const c of globals) c.global = true;
    },
  },

  routeRules: {
    "/docs": { redirect: "/docs/getting-started", prerender: false },
  },

  nitro: {
    prerender: {
      routes: [
        "/",
        "/playground",
        "/buy",
        "/docs/getting-started",
        "/api/search.json",
      ],
    },
  },
});
