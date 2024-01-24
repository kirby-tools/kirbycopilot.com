<script setup lang="ts">
import { joinURL } from "ufo";

const siteConfig = useSiteConfig();
const route = useRoute();
const colorMode = useColorMode();
const color = computed(() =>
  colorMode.value === "dark" ? "#18181b" : "#f4f4f5",
);

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [{ key: "theme-color", name: "theme-color", content: color }],
  link: [
    { rel: "icon", href: "/favicon.ico", sizes: "any" },
    { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
    {
      rel: "canonical",
      href: joinURL(siteConfig.url, route.path),
    },
  ],
  script: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "kirbycopilot.com",
    },
  ],
});

useServerSeoMeta({
  titleTemplate: "%s – Kirby Copilot",
  ogSiteName: "Kirby Copilot",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <!-- <NuxtLoadingIndicator /> -->

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>
