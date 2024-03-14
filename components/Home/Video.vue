<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

defineProps<{
  path: string;
  poster: string;
}>();

const isPlaying = ref(false);

function handleVideoClick(event: MouseEvent) {
  const player = event.target as HTMLVideoElement;

  if (isPlaying.value) {
    player.pause();
    isPlaying.value = false;
    return;
  }

  player.play();
  isPlaying.value = true;
}
</script>

<template>
  <div
    class="group relative cursor-pointer rounded-xl shadow ring-1 ring-gray-200 dark:ring-gray-800"
    :class="[
      !isPlaying && 'hover:ring-primary-500 dark:hover:ring-primary-400',
    ]"
  >
    <video
      :src="path"
      :poster="poster"
      muted
      class="rounded-xl"
      @ended="isPlaying = false"
      @click="handleVideoClick"
    />

    <div
      v-show="!isPlaying"
      class="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-b from-gray-950/50 to-[rgba(0,0,0,0)] to-25%"
    >
      <UIcon
        name="i-ri-play-circle-fill"
        class="group-hover:text-primary-600 h-[4rem] w-[4rem] text-gray-900 md:h-[6rem] md:w-[6rem]"
      />
    </div>
  </div>
</template>
