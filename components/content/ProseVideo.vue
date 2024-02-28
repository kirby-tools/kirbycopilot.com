<script setup lang="ts">
import { withLeadingSlash } from "ufo";

defineProps<{
  src: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
}>();

const isPlaying = ref(false);
</script>

<template>
  <div class="group relative cursor-pointer rounded-xl">
    <video
      :src="withLeadingSlash(src)"
      :poster="poster"
      :width="width"
      :height="height"
      muted
      controls
      class="rounded-xl"
      @play="isPlaying = true"
      @pause="isPlaying = false"
      @ended="isPlaying = false"
    />

    <div
      v-show="!isPlaying"
      class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-gray-950/50 to-[rgba(0,0,0,0)] to-25%"
    />
  </div>
</template>
