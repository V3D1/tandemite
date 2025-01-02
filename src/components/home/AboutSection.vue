<script setup lang="ts">
  defineProps<{
    title: string
  }>()
</script>

<template>
  <section class="about">
    <h2 class="about__title">{{ title }}</h2>
    <div class="about__content">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about {
    @include m.container;
    padding: v.$spacing-xl * 2 v.$spacing-base;
    margin-top: v.$spacing-xl;
    margin-bottom: v.$spacing-xl;
    background-color: v.$color-header;

    &__title {
      font-size: v.$font-size-lg;
      color: v.$color-primary;
      font-weight: 700;
      margin-bottom: v.$spacing-xl;
      text-align: center;
    }

    &__content {
      max-width: 800px;
      margin: 0 auto;

      p {
        margin-bottom: v.$spacing-lg;
        line-height: 1.6;
      }
    }
  }
</style>
