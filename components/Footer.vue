<script setup lang="ts">
// const { metaSymbol } = useShortcuts();
const links = [
  {
    label: "Resources",
    children: [
      {
        label: "Documentation",
        to: "/docs/getting-started",
      },
      {
        label: "Changelog",
        to: "/changelog",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "License",
        to: "/license",
      },
      {
        label: "Privacy Policy",
        to: "/privacy-policy",
      },
      {
        label: "Legal Notice",
        to: "/legal-notice",
      },
    ],
  },
  {
    label: "Support",
    children: [
      {
        label: "Contact",
        to: "/contact",
      },
      {
        label: "GitHub Discussions",
        icon: "i-ri-external-link-fill",
        to: "https://github.com/johannschopplich/kirby-copilot/discussions",
      },
      {
        label: "GitHub Issues",
        icon: "i-ri-external-link-fill",
        to: "https://github.com/johannschopplich/kirby-copilot/issues",
      },
    ],
  },
];
</script>

<template>
  <div
    class="flex h-px w-full items-center justify-center bg-gray-200 dark:bg-gray-800"
  >
    <div
      v-if="!['/playground'].includes($route.path)"
      class="bg-gray-50 px-4 dark:bg-gray-900"
    >
      <Logo class="h-5 w-5" />
    </div>
  </div>

  <UFooter>
    <template #top>
      <UFooterColumns :links="links" />
    </template>

    <template #left>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        © {{ new Date().getFullYear() }}
        <NuxtLink
          to="https://byjohann.link"
          target="_blank"
          class="text-gray-900 dark:text-white"
          >Johann Schopplich</NuxtLink
        >. All rights reserved.
      </p>
    </template>

    <template #right>
      <!-- <UTooltip text="Search" :shortcuts="[metaSymbol, 'K']">
        <UDocsSearchButton label="" />
      </UTooltip> -->
      <UColorModeButton size="sm" />
      <UButton
        aria-label="Kirby Copilot on GitHub"
        icon="i-ri-github-fill"
        to="https://github.com/johannschopplich/kirby-copilot"
        target="_blank"
        v-bind="$ui.button.secondary as any"
      />
    </template>
  </UFooter>
</template>
