<script setup lang="ts">
const title = "Playground";
const description = "Try Kirby Copilot in the interactive Panel playground.";

useSeoMeta({
  title,
  ogTitle: `${title} – Kirby Copilot`,
  description,
  ogDescription: description,
});

defineOgImageComponent("Default", {
  title,
  description,
});
</script>

<template>
  <div class="h-[calc(100vh-var(--header-height)-var(--header-height)-1px)]">
    <ClientOnly>
      <iframe src="https://try.kirbycopilot.com" width="100%" height="100%" />
    </ClientOnly>
  </div>
</template>
