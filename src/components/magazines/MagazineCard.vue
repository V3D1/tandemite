<script setup lang="ts">
  interface Props {
    title: string
    price: number
    image: string
    vatInfo?: string
  }

  defineProps<Props>()
</script>

<template>
  <article class="magazine-card">
    <div class="magazine-card__image">
      <img :src="image" :alt="title" />
    </div>
    <h3 class="magazine-card__title">{{ title }}</h3>
    <div class="magazine-card__price-container">
      <p class="magazine-card__price">{{ price.toFixed(2) }} <span>PLN</span></p>
      <p class="magazine-card__vat" v-if="vatInfo">+ VAT {{ vatInfo }}</p>
    </div>
    <button class="magazine-card__button">SZCZEGÓŁY</button>
  </article>
</template>

<style lang="scss" scoped>
  .magazine-card {
    background: v.$color-white;
    border-radius: 8px;
    padding: v.$spacing-lg;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }

    &__image {
      margin-bottom: v.$spacing-lg;
      img {
        max-width: 200px;
        height: auto;
      }
    }

    &__title {
      color: v.$color-menu-item;
      font-size: v.$font-size-md;
      margin-bottom: v.$spacing-base;
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
      color: v.$color-secondary;
      font-size: v.$font-size-sm;
    }

    &__button {
      background: none;
      border: 2px solid v.$color-primary;
      color: v.$color-primary;
      padding: v.$spacing-sm v.$spacing-xl;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: v.$color-primary;
        color: v.$color-white;
      }
    }
  }
</style>
