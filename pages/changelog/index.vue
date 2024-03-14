<script setup lang="ts">
import { formatTimeAgo } from "@vueuse/core";

const { data: page } = await useAsyncData("changelog", () =>
  queryContent("/changelog").findOne(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const { data: versions } = await useAsyncData("versions", () =>
  queryContent("/changelog/")
    .where({ _extension: "md" })
    .sort({ date: -1, title: -1 })
    .find(),
);

useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} – Kirby Copilot`,
  description: page.value.description,
  ogDescription: page.value.description,
});

defineOgImageComponent("Default", {
  title: page.value.title,
  description: page.value.description,
});
</script>

<template>
  <UContainer>
    <UPageHeader :title="page!.title" :description="page!.description" />

    <UPageBody
      prose
      :ui="{
        wrapper: 'pb-0',
      }"
    >
      <ContentRenderer v-if="page!.body" :value="page" />
    </UPageBody>

    <div class="divide-y divide-gray-200 pb-24 dark:divide-gray-800">
      <div
        v-for="version in versions"
        :key="version.title"
        class="relative grid py-[48px] md:grid-cols-3"
      >
        <div>
          <h2 class="text-xl font-semibold">
            {{ version.title }}
          </h2>
          <p class="mt-2 text-gray-500 dark:text-gray-400">
            {{ formatTimeAgo(new Date(version.date)) }}
          </p>
        </div>
        <div
          class="prose prose-primary dark:prose-invert max-w-none md:col-span-2"
        >
          <ContentRenderer :value="version" />
        </div>
      </div>
    </div>
  </UContainer>
</template>
