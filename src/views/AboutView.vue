<script setup lang="ts">
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
  <div class="home">
    <section class="home__hero">
      <div class="home__hero-content">
        <h1 class="home__title">O Kazusie</h1>
        <p class="home__description">
          Kazus to profesjonalne czasopismo poświęcone tematyce prawa podatkowego i rachunkowości.
          Dostarczamy ekspercką wiedzę i praktyczne rozwiązania dla specjalistów z branży
          finansowej.
        </p>
      </div>
    </section>

    <section class="home__features">
      <div class="home__features-grid">
        <article v-for="feature in features" :key="feature.title" class="feature">
          <div class="feature__icon">{{ feature.icon }}</div>
          <h2 class="feature__title">{{ feature.title }}</h2>
          <p class="feature__description">{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section class="home__about">
      <h2 class="home__about-title">Dlaczego Kazus?</h2>
      <div class="home__about-content">
        <p>
          Od lat dostarczamy profesjonalne treści z zakresu prawa podatkowego i rachunkowości. Nasze
          publikacje są tworzone przez ekspertów z wieloletnim doświadczeniem w branży.
        </p>
        <p>
          Stawiamy na praktyczne podejście, prezentując rzeczywiste przypadki i ich rozwiązania.
          Regularnie aktualizujemy treści, aby być na bieżąco z najnowszymi zmianami w przepisach.
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    &__hero {
      background-color: v.$color-primary;
      padding: v.$spacing-xl * 2 0;
      color: v.$color-white;
    }

    &__hero-content {
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

    &__features {
      @include m.container;
      padding: v.$spacing-xl * 2 0;
    }

    &__features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: v.$spacing-xl;
    }

    &__about {
      @include m.container;
      padding: v.$spacing-xl * 2 0;
      background-color: v.$color-header;
    }

    &__about-title {
      font-size: v.$font-size-lg;
      color: v.$color-primary;
      font-weight: 700;
      margin-bottom: v.$spacing-xl;
      text-align: center;
    }

    &__about-content {
      max-width: 800px;
      margin: 0 auto;

      p {
        margin-bottom: v.$spacing-lg;
        line-height: 1.6;
      }
    }
  }

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
