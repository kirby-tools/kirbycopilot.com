<script setup lang="ts">
import { withLeadingSlash } from "ufo";

defineProps<{
  src: string;
}>();

const isPlaying = ref(false);
</script>

<template>
  <div class="group relative cursor-pointer rounded-xl">
    <video
      :src="withLeadingSlash(src)"
      muted
      controls
      class="rounded-xl"
      @play="isPlaying = true"
      @pause="isPlaying = false"
      @ended="isPlaying = false"
    />

    <div
      v-show="!isPlaying"
      class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-gray-500 to-transparent to-25% dark:from-gray-600"
    />
  </div>
</template>
