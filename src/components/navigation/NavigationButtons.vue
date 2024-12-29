<script setup lang="ts">
  import { useCartStore } from '@/stores/CartStore'
  import { storeToRefs } from 'pinia'
  import IconComponent from '@/components/common/IconComponent.vue'
  import magnifyingGlassIcon from '@/assets/icons/magnifying-glass.svg'
  import userIcon from '@/assets/icons/user.svg'
  import cartIcon from '@/assets/icons/cart.svg'

  const store = useCartStore()
  const { totalItems } = storeToRefs(store)

  const handleSearchClick = () => {
    // TODO: Implementacja wyszukiwania
    console.log('Search clicked')
  }

  const handleLoginClick = () => {
    // TODO: Implementacja logowania
    console.log('Login clicked')
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

    <RouterLink to="/" class="buttons__item">
      <IconComponent :iconPath="cartIcon" ariaLabel="Koszyk" />
      <span v-if="totalItems > 0" class="buttons__cart-count">{{ totalItems }}</span>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  .buttons {
    @include m.flex(row, flex-end, center);
    gap: v.$spacing-lg;

    @include m.responsive('mobile') {
      margin-top: v.$spacing-xl;
    }

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
</style>
