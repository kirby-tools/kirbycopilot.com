import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        "medium-purple": {
          "50": "#f6f2ff",
          "100": "#ede8ff",
          "200": "#ded4ff",
          "300": "#c6b2ff",
          "400": "#a780ff",
          "500": "#9155fd",
          "600": "#8532f5",
          "700": "#7620e1",
          "800": "#631abd",
          "900": "#52189a",
          "950": "#320c69",
        },
      },
      fontFamily: {
        serif: "Instrument Serif, serif",
      },
    },
  },
} satisfies Partial<Config>;
