<script setup lang="ts">
  import FeatureCard from './FeatureCard.vue'
  import { ref } from 'vue'

  const features = ref([
    {
      title: 'Profesjonalna wiedza',
      description: 'Dostarczamy ekspercką wiedzę z zakresu prawa podatkowego i rachunkowości.',
      icon: '📚'
    },
    {
      title: 'Aktualne informacje',
      description: 'Regularnie aktualizujemy treści o najnowsze zmiany w przepisach.',
      icon: '📅'
    },
    {
      title: 'Praktyczne rozwiązania',
      description: 'Prezentujemy rzeczywiste przypadki i ich rozwiązania.',
      icon: '💡'
    }
  ])
</script>

<template>
  <section class="features">
    <div class="features__grid">
      <FeatureCard v-for="feature in features" :key="feature.title" v-bind="feature" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .features {
    @include m.container;
    margin-top: v.$spacing-xl * 4;
    padding: v.$spacing-xl * 2 0;

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: v.$spacing-xl;
    }
  }
</style>
