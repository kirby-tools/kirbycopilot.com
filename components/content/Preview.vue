<script setup lang="ts">
defineProps<{
  src: string;
}>();
</script>

<template>
  <div class="inline-block rounded-md bg-[#F0F0F0] px-6 py-5">
    <NuxtImg
      :src="src"
      sizes="100vw lg:768px"
      alt="Kirby Copilot section preview"
      class="!my-0 w-[22rem] rounded-md"
    />
  </div>
</template>
