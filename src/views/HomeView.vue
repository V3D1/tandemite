<script setup lang="ts">
  import HomeHero from '@/components/home/HomeHero.vue'
  import FeatureGrid from '@/components/home/FeatureGrid.vue'
  import AboutSection from '@/components/home/AboutSection.vue'
  import HomeHeader from '@/components/home/HomeHeader.vue'
</script>

<template>
  <div class="home">
    <HomeHeader />
    <FeatureGrid />
    <HomeHero
      title="O Kazusie"
      description="Kazus to profesjonalne czasopismo poświęcone tematyce prawa podatkowego i rachunkowości. Dostarczamy ekspercką wiedzę i praktyczne rozwiązania dla specjalistów z branży finansowej."
    />

    <AboutSection title="Dlaczego Kazus?">
      <p>
        Od lat dostarczamy profesjonalne treści z zakresu prawa podatkowego i rachunkowości. Nasze
        publikacje są tworzone przez ekspertów z wieloletnim doświadczeniem w branży.
      </p>
      <p>
        Stawiamy na praktyczne podejście, prezentując rzeczywiste przypadki i ich rozwiązania.
        Regularnie aktualizujemy treści, aby być na bieżąco z najnowszymi zmianami w przepisach.
      </p>
    </AboutSection>
  </div>
</template>
