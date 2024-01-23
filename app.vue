<script setup lang="ts">
import { withoutTrailingSlash } from "ufo";

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
    { rel: "icon", type: "image/svg+xml", href: "/icon.svg" },
    {
      rel: "canonical",
      href: `https://kirbycopilot.com${withoutTrailingSlash(route.path)}`,
    },
  ],
});

useServerSeoMeta({
  titleTemplate: "%s - Kirby Copilot",
  ogSiteName: "Kirby Copilot",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>
