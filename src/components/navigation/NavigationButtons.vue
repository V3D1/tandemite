<script setup lang="ts">
  import { useCartStore } from '@/stores/CartStore'
  import { storeToRefs } from 'pinia'
  import IconComponent from '@/components/common/IconComponent.vue'
  import CartPopoverComponent from '@/components/cart/CartPopoverComponent.vue'
  import magnifyingGlassIcon from '@/assets/icons/magnifying-glass.svg'
  import userIcon from '@/assets/icons/user.svg'
  import cartIcon from '@/assets/icons/cart.svg'
  import { ref } from 'vue'

  const store = useCartStore()
  const { totalItems } = storeToRefs(store)
  const isCartOpen = ref(false)

  const handleSearchClick = () => {
    console.log('Search clicked')
  }

  const handleLoginClick = () => {
    console.log('Login clicked')
  }

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }
</script>

<template>
  <div class="buttons">
    <button class="buttons__item" @click="handleSearchClick">
      <IconComponent :iconPath="magnifyingGlassIcon" ariaLabel="Wyszukaj" />
    </button>

    <button class="buttons__item" @click="handleLoginClick">
      <IconComponent :iconPath="userIcon" ariaLabel="Zaloguj się" />
    </button>

    <div class="buttons__item-wrapper">
      <button class="buttons__item" @click="toggleCart">
        <IconComponent :iconPath="cartIcon" ariaLabel="Koszyk" />
        <span v-if="totalItems > 0" class="buttons__cart-count">{{ totalItems }}</span>
      </button>
      <CartPopoverComponent :isOpen="isCartOpen" @close="isCartOpen = false" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .buttons {
    @include m.flex(row, flex-end, center);
    gap: v.$spacing-lg;

    &__item {
      @include m.flex(row, center, center);
      background: none;
      border: none;
      cursor: pointer;
      color: v.$color-menu-item;
      padding: v.$spacing-xs;
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: all 0.3s ease;

      &:hover {
        background-color: v.$color-primary;
        color: v.$color-white;

        :deep(img) {
          filter: brightness(0) invert(1);
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    &__item-wrapper {
      position: relative;
    }

    &__cart-count {
      position: absolute;
      top: -4px;
      right: -4px;
      background-color: v.$color-primary;
      color: v.$color-white;
      min-width: 18px;
      height: 18px;
      border-radius: 9px;
      font-size: v.$font-size-xs;
      @include m.flex(row, center, center);
      padding: 0 4px;
    }
  }

  .cart-sidebar {
    position: fixed;
    top: 0;
    right: -400px;
    width: 400px;
    height: 100vh;
    background-color: white;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    z-index: 1000;
    padding: v.$spacing-lg;

    &--open {
      right: 0;
    }

    &__header {
      @include m.flex(row, space-between, center);
      margin-bottom: v.$spacing-lg;
    }

    &__close {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      padding: v.$spacing-xs;
    }
  }
</style>
