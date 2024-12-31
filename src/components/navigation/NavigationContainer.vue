<script setup lang="ts">
  import { ref } from 'vue'
  import NavigationLogo from './NavigationLogo.vue'
  import NavigationMenu from './NavigationMenu.vue'
  import NavigationButtons from './NavigationButtons.vue'

  const isMobileMenuOpen = ref(false)

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
</script>

<template>
  <header class="header" role="banner">
    <div class="header__container">
      <NavigationLogo />

      <button
        class="header__mobile-toggle"
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="navigation-menu"
      >
        <span class="header__mobile-toggle-icon"></span>
        <span class="visually-hidden">Menu</span>
      </button>

      <div
        id="navigation-menu"
        class="header__navigation"
        :class="{ 'header__navigation--open': isMobileMenuOpen }"
      >
        <NavigationMenu @linkClick="isMobileMenuOpen = false" />
      </div>

      <NavigationButtons />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    height: 80px;
    background-color: v.$color-white;
    padding: v.$spacing-base 0;
    border-bottom: 1px solid v.$color-header;
    position: relative;
    z-index: 2;

    &__container {
      @include m.container;
      @include m.flex(row, space-between, center);
      position: relative;
    }

    &__mobile-toggle {
      display: none;
      background: none;
      border: none;
      padding: v.$spacing-sm;
      cursor: pointer;

      @include m.responsive('mobile') {
        display: block;
        order: 3;
        z-index: 100;
      }

      &-icon {
        display: block;
        width: 24px;
        height: 2px;
        background-color: v.$color-menu-item;
        position: relative;
        transition: background-color 0.3s;

        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: v.$color-menu-item;
          transition: transform 0.3s;
        }

        &::before {
          transform: translateY(-8px);
        }

        &::after {
          transform: translateY(8px);
        }
      }

      &[aria-expanded='true'] {
        .header__mobile-toggle-icon {
          background-color: transparent;

          &::before {
            transform: translateY(0) rotate(45deg);
          }

          &::after {
            transform: translateY(0) rotate(-45deg);
          }
        }
      }
    }

    &__navigation {
      @include m.flex(row, flex-end, center);
      gap: v.$spacing-xl;
      margin-left: v.$spacing-xl * 2;

      @include m.responsive('mobile') {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: v.$color-white;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: v.$spacing-xl;
        z-index: 90;

        &--open {
          display: flex;
        }
      }
    }
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
</style>
