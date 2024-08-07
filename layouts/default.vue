<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

const { data: nav } = await useAsyncData(
  "navigation",
  () => fetchContentNavigation(),
  { default: () => [] },
);

const navigation = computed(() =>
  nav.value?.map((item) => {
    // Remove changelog children
    if (item._path === "/changelog") {
      item.children = [];
    }

    return item;
  }),
);

const { data: files } = useLazyFetch<ParsedContent[]>("/api/search.json", {
  default: () => [],
  server: false,
});

provide("navigation", navigation);
</script>

<template>
  <div>
    <Header />

    <UMain>
      <slot />
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>
  </div>
</template>
