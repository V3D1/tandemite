<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue'
  import MagazinesHeader from '@/components/magazines/MagazinesHeader.vue'
  import MagazineCard from '@/components/magazines/MagazineCard.vue'
  import PaginationComponent from '@/components/common/PaginationComponent.vue'
  import { useCartStore } from '@/stores/CartStore'
  import { storeToRefs } from 'pinia'

  const store = useCartStore()
  const { products } = storeToRefs(store)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const itemsPerPage = 8

  const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage))
  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return products.value.slice(start, end)
  })

  const handlePageChange = (page: number) => {
    currentPage.value = page
    // przy wiekszej ilosci produktow na strone mozna zastosowac ponizszy kod
    // window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const fetchMagazines = async () => {
    isLoading.value = true
    error.value = null

    try {
      await store.fetchProducts()
    } catch (error) {
      error.value = 'Nie udało się pobrać czasopism'
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchMagazines)
</script>

<template>
  <div class="magazines">
    <div class="magazines__hero">
      <MagazinesHeader />
      <div class="magazines__hero-image">
        <!-- <img src="@/assets/images/magazines-hero.png" alt="Czasopisma Kazus" /> -->
      </div>
    </div>
    <h1 class="magazines__title">Wyszukaj czasopismo</h1>
    <div class="magazines__content">
      <div v-if="isLoading" class="magazines__loading">Ładowanie czasopism...</div>
      <div v-else-if="error" class="magazines__error">
        {{ error }}
      </div>
      <div v-else>
        <div class="magazines__grid">
          <MagazineCard
            v-for="product in paginatedProducts"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :price="product.price"
            :image="product.image_url"
            :vatInfo="product.vat"
          />
        </div>
        <PaginationComponent
          :current-page="currentPage"
          :total-pages="totalPages"
          :on-page-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .magazines {
    &__hero {
      background-color: v.$color-primary;
      padding: v.$spacing-xl * 2 0;
      position: relative;
      overflow: hidden;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: v.$spacing-xl;
      align-items: center;

      @include m.container;
    }

    &__hero-image {
      display: flex;
      justify-content: flex-end;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    &__title {
      @include m.container;
      color: v.$color-primary;
      font-size: 2rem;
      font-weight: 700;
      margin-top: v.$spacing-xl;
      margin-bottom: v.$spacing-xl;
    }

    &__content {
      @include m.container;
      padding: v.$spacing-xl 0;
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

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: v.$spacing-xl;
      margin-top: v.$spacing-xl;
    }
  }
</style>
