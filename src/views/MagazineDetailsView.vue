<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useCartStore } from '@/stores/CartStore'
  import { storeToRefs } from 'pinia'

  const route = useRoute()
  const store = useCartStore()
  const { products } = storeToRefs(store)
  const isLoading = ref(true)
  const error = ref<string | null>(null)
  const quantity = ref(1)

  const magazine = computed(() => {
    return products.value.find(product => product.id === Number(route.params.id))
  })

  const addToCart = () => {
    if (magazine.value) {
      store.addItem(magazine.value, quantity.value)
    }
  }

  const incrementQuantity = () => {
    quantity.value++
  }

  const decrementQuantity = () => {
    if (quantity.value > 1) {
      quantity.value--
    }
  }

  onMounted(async () => {
    if (products.value.length === 0) {
      try {
        await store.fetchProducts()
      } catch (error) {
        error.value = 'Nie udało się pobrać szczegółów magazynu'
      }
    }
    isLoading.value = false
  })
</script>

<template>
  <div class="magazine-details">
    <div v-if="isLoading" class="magazine-details__loading">Ładowanie szczegółów magazynu...</div>
    <div v-else-if="error" class="magazine-details__error">
      {{ error }}
    </div>
    <div v-else-if="!magazine" class="magazine-details__error">Nie znaleziono magazynu</div>
    <div v-else class="magazine-details__content">
      <div class="magazine-details__image">
        <img :src="magazine.image_url" :alt="magazine.title" />
      </div>
      <div class="magazine-details__info">
        <h1 class="magazine-details__title">{{ magazine.title }}</h1>
        <div class="magazine-details__price-container">
          <p class="magazine-details__price">{{ magazine.price.toFixed(2) }} <span>PLN</span></p>
          <p class="magazine-details__vat" v-if="magazine.vat">+ VAT {{ magazine.vat }}</p>
        </div>
        <div class="magazine-details__quantity">
          <button
            class="magazine-details__quantity-btn"
            @click="decrementQuantity"
            :disabled="quantity <= 1"
          >
            -
          </button>
          <span class="magazine-details__quantity-value">{{ quantity }}</span>
          <button class="magazine-details__quantity-btn" @click="incrementQuantity">+</button>
        </div>
        <button class="magazine-details__button" @click="addToCart">
          Dodaj do koszyka ({{ quantity }})
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .magazine-details {
    @include m.container;
    padding: v.$spacing-xl 0;

    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: v.$spacing-xl * 2;
      align-items: start;

      @include m.responsive('mobile') {
        grid-template-columns: 1fr;
      }
    }

    &__image {
      width: 100%;
      padding-top: 60px;
      text-align: center;

      img {
        width: 180px;
        height: auto;
      }
    }

    &__info {
      padding: v.$spacing-xl;
    }

    &__title {
      color: v.$color-primary;
      font-size: v.$font-size-base * 2;
      font-weight: 700;
      margin-bottom: v.$spacing-lg;
    }

    &__price-container {
      margin-bottom: v.$spacing-xl;
    }

    &__price {
      color: v.$color-primary;
      font-size: v.$font-size-base * 2;
      font-weight: 700;

      span {
        font-size: v.$font-size-base * 2;
      }
    }

    &__vat {
      color: v.$color-primary;
      font-size: v.$font-size-sm;
      margin-top: v.$spacing-xs;
    }

    &__button {
      background-color: v.$color-primary;
      color: v.$color-white;
      border: none;
      padding: v.$spacing-base v.$spacing-xl;
      font-size: v.$font-size-base;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: v.$color-secondary;
      }
    }

    &__loading,
    &__error {
      text-align: center;
      padding: v.$spacing-xl;
      font-size: v.$font-size-lg;
    }

    &__error {
      color: v.$color-error;
    }

    &__quantity {
      display: flex;
      align-items: center;
      gap: v.$spacing-base;
      margin-bottom: v.$spacing-lg;
      justify-content: start;

      &-btn {
        width: 32px;
        height: 32px;
        border: 1px solid v.$color-primary;
        background: none;
        color: v.$color-primary;
        font-size: v.$font-size-lg;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s ease;

        &:hover:not(:disabled) {
          background-color: v.$color-primary;
          color: v.$color-white;
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }

      &-value {
        min-width: 40px;
        text-align: center;
        font-size: v.$font-size-lg;
        font-weight: 600;
        color: v.$color-primary;
      }
    }
  }
</style>
