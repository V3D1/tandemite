<script setup lang="ts">
  import R_letter from '@/assets/images/R_letter.svg'
  import okladka_kazus from '@/assets/images/okladka_kazus.png'
  import ImageComponent from '@/components/common/ImageComponent.vue'
</script>
<template>
  <div class="magazines-header-wrapper">
    <header class="magazines-header">
      <div class="magazines-header__image">
        <ImageComponent :src="R_letter" width="447" alt="litera R" />
      </div>
      <div class="magazines-header__container">
        <h1 class="magazines-header__title">Czasopisma</h1>
        <p class="magazines-header__description">
          Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego", który tym razem
          poświęcony jest w dużej części zmianom w podatkach w roku 2019.
        </p>
        <p class="magazines-header__subtitle">
          Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztów
          używania samochodów osobowych, wprowadzenie „exit tax" czy zmiany dotyczące poboru podatku
          u źródła na gruncie podatków dochodowych, poświęcając im odrębne artykuły.
        </p>
      </div>
      <div class="magazines-header__cover">
        <ImageComponent :src="okladka_kazus" alt="okładka kazus" />
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  .magazines-header-wrapper {
    background-color: v.$color-primary;
  }
  .magazines-header {
    @include m.flex(row, space-between, center);
    @include m.container;
    color: v.$color-white;
    height: 360px;
    position: relative;

    @include m.responsive('mobile') {
      @include m.flex(column, center, center);
      height: auto;
    }
    &__container {
      z-index: 1;
      max-width: 562px;
    }

    &__image {
      z-index: 0;
      left: 0;
      bottom: -40px;
      position: absolute;
      @include m.responsive('mobile') {
        bottom: 0;
      }
    }

    &__title {
      font-size: 56px;
      font-weight: 600;
      margin-bottom: v.$spacing-xl;
      line-height: 1.2;

      @include m.responsive('mobile') {
        font-size: v.$font-size-lg;
        margin-top: v.$spacing-base;
      }
    }

    &__description {
      font-size: v.$font-size-base;
      margin-bottom: v.$spacing-lg;
      line-height: 1.6;
      font-weight: 600;
    }

    &__subtitle {
      font-size: v.$font-size-base;
      opacity: 0.8;
      line-height: 1.6;
    }

    &__cover {
      z-index: 1;
      margin-top: 200px;
      margin-left: v.$spacing-lg * 2;

      @include m.responsive('mobile') {
        margin-top: 10px;
        margin-left: v.$spacing-lg;
      }
    }
  }
</style>
