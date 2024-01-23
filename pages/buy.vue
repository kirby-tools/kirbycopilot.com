<script setup lang="ts">
const { data: page } = await useAsyncData("buy", () =>
  queryContent("/buy").findOne(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const coupon = ref(page.value.coupon?.code);
const { copy, copied } = useClipboard({ source: coupon });

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
  <div v-if="page">
    <UPageHero v-bind="page.hero" />

    <UContainer
      :ui="{
        constrained: 'max-w-md',
      }"
    >
      <div v-if="page.coupon" class="relative z-[1] -mb-4 flex justify-center">
        <UButton
          :color="copied ? 'white' : 'gray'"
          variant="ghost"
          :icon="
            copied ? 'i-ri-checkbox-circle-line' : 'i-ri-discount-percent-fill'
          "
          class="border-primary border-2 border-dashed bg-gray-50 dark:bg-gray-900"
          @click="copy(coupon)"
        >
          {{ copied ? "Copied!" : page.coupon.label }}
        </UButton>
      </div>

      <UPricingCard v-bind="page.plan" />
    </UContainer>

    <ULandingSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <ULandingFAQ :items="page.faq.items" multiple class="mx-auto max-w-4xl">
        <template #item="{ item }">
          <MDC
            :value="item.content"
            class="prose prose-primary dark:prose-invert max-w-none text-gray-500 dark:text-gray-400"
          />
        </template>
      </ULandingFAQ>
    </ULandingSection>
  </div>
</template>
