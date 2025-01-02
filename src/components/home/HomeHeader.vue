<script setup lang="ts">
  import R_letter from '@/assets/images/R_letter.svg'
  import okladka_kazus from '@/assets/images/okladka_kazus.png'
  import check from '@/assets/icons/check.svg'
  import ImageComponent from '@/components/common/ImageComponent.vue'
  import ButtonComponent from '@/components/common/ButtonComponent.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const handleNavigate = () => {
    router.push('/magazines')
  }

  const bulletPoints = [
    'Najlepszy sposób by Twoja firma była na bieżąco z prawem podatkowym.',
    'Najlepszy sposób by Twoja firma była na bieżąco z prawem unijnym.',
    'Najlepszy sposób by Twoja firma była na bieżąco z prawem krajowym.'
  ]
</script>
<template>
  <div class="home-header-wrapper">
    <header class="home-header">
      <div class="home-header__image">
        <ImageComponent :src="R_letter" width="447" alt="litera R" />
      </div>
      <div class="home-header__container">
        <h1 class="home-header__title">Prawo podatkowe mamy ogarnięte</h1>
        <p class="home-header__description">W tym numerze dowiesz się:</p>
        <ul class="home-header__list">
          <li v-for="(point, index) in bulletPoints" :key="index" class="home-header__list-item">
            <ImageComponent :src="check" alt="check" width="20px" height="20px" />
            <span>{{ point }}</span>
          </li>
        </ul>
        <div class="home-header__buttons">
          <ButtonComponent
            variant="highlight"
            class="home-header__buttons-single"
            @click="handleNavigate"
            >ZAMÓW TERAZ</ButtonComponent
          >
          <ButtonComponent
            variant="secondary"
            class="home-header__buttons-single"
            @click="handleNavigate"
            >KUP PRENUMERATĘ</ButtonComponent
          >
        </div>
      </div>
      <div class="home-header__cover">
        <ImageComponent :src="okladka_kazus" alt="okładka kazus" />
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  .background {
    position: relative;
    background: #fff;
  }

  .home-header-wrapper {
    position: relative;
    background-color: v.$color-primary;
    @include m.responsive('mobile') {
      background-color: v.$color-header;
    }
  }

  .home-header-wrapper:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: v.$color-header;

    @include m.responsive('mobile') {
      top: 50%;
      left: 0;
      width: 100%;
      height: 50%;
      background-color: v.$color-primary;
    }
  }

  .home-header {
    @include m.flex(row, space-between, center);
    @include m.container;
    color: v.$color-white;
    height: 500px;
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
      color: v.$color-primary;
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
      color: v.$color-secondary;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-size: v.$font-size-base;
      margin-bottom: v.$spacing-lg;
      line-height: 1.6;
    }

    &__list {
      list-style: none;
      padding: 0;

      &-item {
        @include m.flex(row, flex-start, center);
        color: v.$color-secondary;
        margin-bottom: v.$spacing-sm;
        gap: v.$spacing-sm;
        @include m.responsive('mobile') {
          @include m.flex(column, center, center);
          text-align: center;
        }
      }
    }

    &__buttons {
      @include m.flex(row, center, center);
      margin-top: 50px;
      &-single {
        width: 50% !important;
      }
    }
  }
</style>
