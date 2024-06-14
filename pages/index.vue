<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  titleTemplate: "",
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
  ogImage: "https://kirbycopilot.com/social-card.png",
  twitterImage: "https://kirbycopilot.com/social-card.png",
});

const source = ref('"provider" => "mistral"');
const { copy, copied } = useClipboard({ source });
</script>

<template>
  <div v-if="page">
    <ULandingHero
      :ui="{
        base: 'relative z-[1]',
        title: 'font-serif',
      }"
      :links="page.hero.links"
    >
      <div
        class="absolute inset-0 z-[-1] flex items-start justify-center overflow-hidden"
      >
        <HomeHeroBackground
          class="h-full w-full scale-[2] transform lg:scale-[1.1]"
        />
      </div>

      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="md"
          class="hover:bg-primary-100 dark:bg-primary-950/100 dark:hover:bg-primary-900 relative rounded-full font-medium shadow-none"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          <span class="flex items-center gap-1">
            <UIcon
              v-if="page.hero.headline.icon"
              :name="page.hero.headline.icon"
              class="pointer-events-none h-4 w-4"
            />
            {{ page.hero.headline.label }}
          </span>
        </UBadge>
      </template>

      <template #title>
        <span v-html="page.hero.title" />
      </template>

      <template #description>
        <span v-html="page.hero.description" />
      </template>
    </ULandingHero>

    <ULandingSection
      v-for="(section, index) of page.sections"
      :key="index"
      :ui="{ container: section.slot === 'video' ? 'max-w-4xl' : undefined }"
      v-bind="section"
      class="!pt-16"
    >
      <template v-if="section.title" #title>
        <span v-html="section.title" />
      </template>

      <template v-if="section.description" #description>
        <span v-html="section.description" />
      </template>

      <template #video>
        <HomeVideo v-bind="section.video" />
      </template>

      <template #features>
        <ULandingGrid class="lg:-mb-20 lg:auto-rows-[3rem]">
          <ULandingCard
            v-for="(card, subIndex) of section.cards"
            :key="subIndex"
            v-bind="card"
            :ui="{
              background:
                'dark:bg-gray-900/50 dark:lg:bg-gradient-to-b from-gray-700/50 to-gray-950/50',
              body: {
                base: 'flex-1',
                background:
                  'dark:bg-gray-800/50 dark:lg:bg-gray-900/50 backdrop-blur-lg',
              },
            }"
            class="flex flex-col"
          >
            <div
              v-if="card.type === 'prompt'"
              class="rounded-md bg-[#F0F0F0] p-4"
            >
              <NuxtImg
                src="/img/copilot-predefined-user-prompt.png"
                sizes="320px"
                alt="Kirby Copilot section preview"
                class="rounded-md"
              />
            </div>
            <div
              v-else-if="card.type === 'generate'"
              class="flex items-center justify-center"
            >
              <UButton color="gray" size="md">
                <template #leading>
                  <UIcon name="i-ri-loader-4-fill" class="animate-spin" />
                </template>
                Generating…
              </UButton>
            </div>
            <UInput
              v-else-if="card.type === 'provider'"
              v-model="source"
              color="gray"
              readonly
              autocomplete="off"
              icon="i-ri-code-fill"
              input-class="select-none"
              aria-label="Mistral provider configuration"
              size="lg"
              :ui="{
                base: 'font-mono disabled:cursor-default',
                icon: { trailing: { pointer: '' } },
              }"
            >
              <template #trailing>
                <UButton
                  aria-label="Copy code"
                  :color="copied ? 'primary' : 'gray'"
                  variant="link"
                  size="2xs"
                  :icon="
                    copied ? 'i-ri-checkbox-circle-line' : 'i-ri-file-copy-line'
                  "
                  @click="copy(source)"
                />
              </template>
            </UInput>
            <UColorModeImage
              v-else-if="card.image"
              :light="`${card.image.path}-light.svg`"
              :dark="`${card.image.path}-dark.svg`"
              :width="card.image.width"
              :height="card.image.height"
              :alt="card.title"
              class="w-full object-cover"
            />
          </ULandingCard>
        </ULandingGrid>
      </template>

      <template #projects>
        <ULandingLogos align="center" :ui="{ images: 'justify-center' }">
          <UButton
            v-for="(project, projectIndex) in section.projects"
            :key="projectIndex"
            :to="project.link"
            color="gray"
            target="_blank"
            variant="link"
            :ui="{
              rounded: 'rounded-full',
            }"
          >
            <span class="text-[1.2em] underline">{{ project.title }}</span>
            <!-- <template #trailing>
              <UIcon name="i-ri-external-link-line" />
            </template> -->
          </UButton>
        </ULandingLogos>
      </template>
    </ULandingSection>

    <ULandingSection class="!pt-0">
      <ULandingCTA v-bind="page.cta" class="bg-gray-200/50 dark:bg-gray-800/50">
        <template #title>
          <span v-html="page.cta?.title" />
        </template>
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>
