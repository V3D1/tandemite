<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import ButtonComponent from '@/components/common/ButtonComponent.vue'

  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  const goHome = () => {
    router.push('/')
  }
</script>

<template>
  <div class="not-found">
    <div class="not-found__content">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__description">Przepraszamy, ale strona której szukasz nie istnieje.</p>
      <div class="not-found__buttons">
        <ButtonComponent variant="secondary" @click="goBack">Wróć</ButtonComponent>
        <ButtonComponent variant="primary" @click="goHome">Strona główna</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .not-found {
    @include m.container;
    min-height: calc(100vh - 80px);
    @include m.flex(column, center, center);
    text-align: center;
    padding: v.$spacing-xl;

    &__content {
      max-width: 600px;
    }

    &__title {
      font-size: 120px;
      font-weight: 700;
      color: v.$color-primary;
      margin-bottom: v.$spacing-lg;
      line-height: 1;
    }

    &__description {
      font-size: v.$font-size-lg;
      color: v.$color-secondary;
      margin-bottom: v.$spacing-xl;
    }

    &__buttons {
      @include m.flex(row, center, center);
      gap: v.$spacing-base;
    }
  }
</style>
