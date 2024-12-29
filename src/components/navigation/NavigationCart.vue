<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useCartStore } from '@/stores/CartStore'

  const store = useCartStore()
  const { totalItems } = storeToRefs(store)
</script>

<template>
  <RouterLink to="/cart" class="cart">
    <span class="cart__icon">🛒</span>
    <span v-if="totalItems > 0" class="cart__count">{{ totalItems }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
  .cart {
    @include m.flex(row, center, center);
    gap: v.$spacing-xs;
    text-decoration: none;
    color: v.$color-menu-item;

    &__icon {
      font-size: v.$font-size-lg;
    }

    &__count {
      background-color: v.$color-primary;
      color: v.$color-white;
      padding: 2px 6px;
      border-radius: 50%;
      font-size: v.$font-size-xs;
    }
  }
</style>
