import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      colors: {
        "butterfly-bush": {
          "50": "#f9f8fc",
          "100": "#f2eff8",
          "200": "#e8e2f2",
          "300": "#d5cae8",
          "400": "#b9a8d8",
          "500": "#9e86c6",
          "600": "#866ab3",
          "700": "#6c5294",
          "800": "#5f4980",
          "900": "#4e3c67",
          "950": "#332348",
        },
      },
      fontFamily: {
        serif: [
          "Instrument Serif",
          "Instrument Serif fallback",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
} satisfies Partial<Config>;
