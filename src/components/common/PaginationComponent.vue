<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }

  const props = defineProps<Props>()

  const pages = computed(() => {
    const pagesArray = []
    for (let i = 1; i <= props.totalPages; i++) {
      pagesArray.push(i)
    }
    return pagesArray
  })
</script>

<template>
  <nav class="pagination" aria-label="Nawigacja stron">
    <button
      class="pagination__arrow"
      :disabled="currentPage === 1"
      @click="onPageChange(currentPage - 1)"
      aria-label="Poprzednia strona"
    >
      ‹
    </button>

    <ul class="pagination__list">
      <li v-for="page in pages" :key="page">
        <button
          class="pagination__page"
          :class="{ 'pagination__page--active': page === currentPage }"
          @click="onPageChange(page)"
        >
          {{ page }}
        </button>
      </li>
    </ul>

    <button
      class="pagination__arrow"
      :disabled="currentPage === totalPages"
      @click="onPageChange(currentPage + 1)"
      aria-label="Następna strona"
    >
      ›
    </button>
  </nav>
</template>

<style lang="scss" scoped>
  .pagination {
    @include m.flex(row, center, center);
    gap: v.$spacing-sm;
    margin-top: v.$spacing-xl;

    &__list {
      @include m.flex(row, center, center);
      gap: v.$spacing-xs;
      list-style: none;
    }

    &__page,
    &__arrow {
      @include m.flex(row, center, center);
      min-width: 32px;
      height: 32px;
      border: none;
      background: none;
      color: v.$color-pagination;
      cursor: pointer;
      font-size: v.$font-size-base;
      transition: all 0.3s ease;

      &--active {
        background: v.$color-primary;
        color: v.$color-white;
        font-weight: 700;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &__arrow {
      font-size: 1.5rem;
    }
  }
</style>
