<script setup lang="ts">
import { withQuery } from "ufo";

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

const appConfig = useAppConfig();

const licenseHolder = ref("");
const checkoutUrl = computed(() =>
  withQuery(page.value!.plan.button.to, {
    "checkout[custom][licenseHolder]": licenseHolder.value || undefined,
  }),
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
  <div v-if="page">
    <UPageHero v-bind="page.hero" />

    <UContainer
      :ui="{
        constrained: 'max-w-lg',
      }"
    >
      <div class="relative">
        <UPricingCard
          v-bind="page.plan"
          :button="{ ...page.plan.button, to: checkoutUrl }"
        >
          <template #features>
            <ul
              v-if="page.plan.features?.length"
              class="mb-6 space-y-3 text-sm"
            >
              <li
                v-for="(offer, index) of page.plan.features"
                :key="index"
                class="flex min-w-0 items-center gap-x-3"
              >
                <UIcon
                  :name="appConfig.ui.icons.check"
                  class="text-primary h-5 w-5 flex-shrink-0"
                />

                <span class="truncate text-gray-600 dark:text-gray-400">{{
                  offer
                }}</span>
              </li>
            </ul>

            <UDivider label="Licensee" class="mb-6" />

            <UInput
              v-model="licenseHolder"
              color="gray"
              placeholder="License holder"
              class="mb-2"
            />
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Who will own this license (e.g. your full name, organization, or
              client)? Will be you by default.
            </div>
          </template>
        </UPricingCard>

        <div
          class="absolute inset-x-0 top-0 flex translate-y-[-50%] justify-center"
        >
          <UButton
            size="2xs"
            variant="outline"
            to="https://hub.kirby.tools"
            :ui="{
              rounded: 'rounded-full',
              variant: {
                outline: 'bg-white dark:bg-gray-900',
              },
            }"
          >
            50% off for Returning Customers
          </UButton>
        </div>
      </div>
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
