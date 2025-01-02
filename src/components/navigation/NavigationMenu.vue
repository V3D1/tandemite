<script setup lang="ts">
  import { ref } from 'vue'

  const emit = defineEmits(['linkClick'])

  const menuItems = ref([
    { name: 'O Kazusie', path: '/' },
    { name: 'O Firmie', path: '/o_firmie' },
    { name: 'Czasopisma', path: '/magazines' },
    { name: 'Szkolenia', path: '/szkolenia' },
    { name: 'Baza wiedzy', path: '/baza_wiedzy' },
    { name: 'Kazus TV', path: '/tv' },
    { name: 'Kontakt', path: '/kontakt' }
  ])

  const handleLinkClick = () => {
    emit('linkClick')
  }
</script>

<template>
  <nav class="navigation">
    <ul class="menu">
      <li v-for="item in menuItems" :key="item.name" class="menu__item">
        <RouterLink :to="item.path" class="menu__link" @click="handleLinkClick">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .navigation {
    @include m.responsive('mobile') {
      width: 100%;
    }
  }

  .menu {
    @include m.flex(row, flex-end, center);
    gap: v.$spacing-xl;
    list-style: none;

    @include m.responsive('mobile') {
      flex-direction: column;
      align-items: center;
      gap: v.$spacing-lg * 2;
      margin-top: v.$spacing-lg * 3;
      margin-right: 0;
    }

    &__item {
      position: relative;

      @include m.responsive('mobile') {
        width: 100%;
        text-align: center;
      }
    }

    &__link {
      color: v.$color-menu-item;
      text-decoration: none;
      font-size: v.$font-size-base;
      font-weight: 500;
      transition: color 0.3s ease;
      padding: v.$spacing-xs v.$spacing-sm;

      @include m.responsive('font-smaller') {
        font-size: v.$font-size-xs;
        padding: v.$spacing-xs calc(v.$spacing-sm * 0.9);
      }

      @include m.responsive('mobile') {
        display: block;
        font-size: v.$font-size-lg;
        padding: v.$spacing-sm;
      }

      &:hover,
      &.router-link-active {
        color: v.$color-primary;
      }
    }
  }
</style>
