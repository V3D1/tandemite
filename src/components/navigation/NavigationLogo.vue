<template>
  <RouterLink to="/" class="logo" aria-label="Przejdź do strony głównej">
    <img
      src="@/assets/images/Group 412.svg"
      alt="Logo Tandemite"
      class="logo__image"
      width="167"
      height="43"
    />
  </RouterLink>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
  .logo {
    display: inline-block;
    flex-shrink: 0;

    &__image {
      transition: opacity 0.3s ease;
    }

    &:hover {
      .logo__image {
        opacity: 0.8;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .logo__image {
        transition: none;
      }
    }

    &:focus {
      outline: 2px solid v.$color-primary;
      outline-offset: 4px;
      border-radius: 2px;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
</style>
