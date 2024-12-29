<script setup lang="ts">
  interface Props {
    iconPath: string
    ariaLabel?: string
    size?: number
  }

  withDefaults(defineProps<Props>(), {
    size: 20,
    ariaLabel: ''
  })
</script>

<template>
  <span class="icon" :aria-label="ariaLabel" :aria-hidden="!ariaLabel" role="img">
    <img :src="iconPath" :alt="ariaLabel" :width="size" :height="size" />
  </span>
</template>

<style lang="scss" scoped>
  .icon {
    @include m.flex(row, center, center);
    line-height: 0;

    img {
      display: block;
    }
  }
</style>
