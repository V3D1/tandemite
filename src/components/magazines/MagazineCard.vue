<script setup lang="ts">
  interface Props {
    title: string
    price: number
    image: string
    vatInfo?: string
    id: number
  }

  defineProps<Props>()
</script>

<template>
  <RouterLink :to="`/magazines/${id}`" class="magazine-card">
    <article class="magazine-card__container">
      <div class="magazine-card__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="magazine-card__content">
        <h3 class="magazine-card__title">{{ title }}</h3>
        <div class="magazine-card__price-container">
          <p class="magazine-card__price">{{ price.toFixed(2) }} <span>PLN</span></p>
          <p class="magazine-card__vat" v-if="vatInfo">+ VAT {{ vatInfo }}</p>
        </div>
        <span class="magazine-card__button">SZCZEGÓŁY</span>
      </div>
    </article>
  </RouterLink>
</template>

<style lang="scss" scoped>
  .magazine-card {
    display: block;
    text-decoration: none;
    position: relative;
    padding-top: 120px;
    width: 90%;

    &__container {
      padding-top: 60px;
      background: v.$color-white;
      text-align: center;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.3s ease;

      &:hover {
        border-color: v.$color-highlight;

        .magazine-card__title,
        .magazine-card__price,
        .magazine-card__vat,
        .magazine-card__button {
          color: v.$color-highlight;
        }
      }
    }

    &__image {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;

      img {
        max-width: 200px;
        height: auto;
        transition: transform 0.3s ease;
      }
    }

    &__content {
      padding: v.$spacing-base;
      margin-top: v.$spacing-base;
      position: relative;
      z-index: 0;
    }

    &__title {
      color: v.$color-primary;
      font-size: v.$font-size-md;
      margin-bottom: v.$spacing-xs;
      min-height: 48px;
    }

    &__price-container {
      margin-bottom: v.$spacing-base;
    }

    &__price {
      color: v.$color-primary;
      font-size: 1.5rem;
      font-weight: 700;

      span {
        font-size: v.$font-size-sm;
      }
    }

    &__vat {
      color: v.$color-primary;
      font-size: v.$font-size-sm;
      margin-top: v.$spacing-xs;
    }

    &__button {
      display: inline-block;
      color: v.$color-primary;
      padding: v.$spacing-sm v.$spacing-xl;
      font-weight: 600;
      text-transform: uppercase;
      font-size: v.$font-size-sm;
      min-width: 120px;
    }
  }
</style>
