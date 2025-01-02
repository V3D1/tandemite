<script setup lang="ts">
  defineProps<{
    title: string
    description: string
    icon: string
  }>()
</script>

<template>
  <article class="feature">
    <div class="feature__icon">{{ icon }}</div>
    <h2 class="feature__title">{{ title }}</h2>
    <p class="feature__description">{{ description }}</p>
  </article>
</template>

<style lang="scss" scoped>
  .feature {
    padding: v.$spacing-lg;
    text-align: center;
    background-color: v.$color-header;
    border-radius: 4px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    &__icon {
      font-size: 2.5rem;
      margin-bottom: v.$spacing-base;
    }

    &__title {
      color: v.$color-primary;
      font-size: v.$font-size-lg;
      font-weight: 600;
      margin-bottom: v.$spacing-sm;
    }

    &__description {
      line-height: 1.5;
    }
  }
</style>
