<script setup lang="ts">
  defineProps<{
    title: string
    description: string
  }>()
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__content">
      <h1 class="home-hero__title">{{ title }}</h1>
      <p class="home-hero__description">{{ description }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .home-hero {
    background-color: v.$color-primary;
    padding: v.$spacing-xl * 2 0;
    color: v.$color-white;

    &__content {
      @include m.container;
      max-width: 800px;
    }

    &__title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: v.$spacing-lg;
    }

    &__description {
      font-size: v.$font-size-lg;
      line-height: 1.6;
    }
  }
</style>
