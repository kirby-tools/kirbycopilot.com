import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        orchid: {
          "50": "#fbf5fe",
          "100": "#f7ebfc",
          "200": "#efd5f9",
          "300": "#e4b4f3",
          "400": "#d588ea",
          "500": "#c66bdf",
          "600": "#a53abf",
          "700": "#8a2d9e",
          "800": "#722781",
          "900": "#61256a",
          "950": "#3d0d45",
        },
      },
      fontFamily: {
        serif: "Instrument Serif, serif",
      },
    },
  },
} satisfies Partial<Config>;
