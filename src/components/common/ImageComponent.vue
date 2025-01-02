<script setup lang="ts">
  interface Props {
    src: string
    alt: string
    width?: number | string
    height?: number | string
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
    lazy?: boolean
  }

  withDefaults(defineProps<Props>(), {
    objectFit: 'contain',
    lazy: true
  })
</script>

<template>
  <div class="image-wrapper" :style="{ width, height }">
    <img
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      class="image"
      :style="{ objectFit }"
    />
  </div>
</template>

<style lang="scss" scoped>
  .image-wrapper {
    z-index: 1;
    position: relative;
    overflow: hidden;

    .image {
      display: block;
      transition: transform 0.3s ease;
    }
  }
</style>
