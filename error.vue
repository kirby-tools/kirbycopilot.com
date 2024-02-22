<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

useSeoMeta({
  title: "Page not found",
  description: "We are sorry but this page could not be found.",
});

const { data: navigation } = await useAsyncData(
  "navigation",
  () => fetchContentNavigation(),
  { default: () => [] },
);

const { data: files } = useLazyFetch<ParsedContent[]>("/api/search.json", {
  default: () => [],
  server: false,
});

provide("navigation", navigation);
provide("files", files);
</script>

<template>
  <div>
    <Header />

    <UMain>
      <UContainer>
        <UPage>
          <UPageError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
