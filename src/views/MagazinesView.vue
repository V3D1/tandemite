<script setup lang="ts">
  import MagazinesHeader from '@/components/magazines/MagazinesHeader.vue'
  import MagazineCard from '@/components/magazines/MagazineCard.vue'

  const magazines = [
    {
      id: 1,
      title: 'Kazus Podatkowy 1(6)2019',
      price: 98.76,
      image: '/images/magazines/kazus-1.jpg',
      vatInfo: '23%'
    },
    {
      id: 2,
      title: 'Procedury administracyjne i podatkowe 2',
      price: 98.76,
      image: '/images/magazines/procedury-2.jpg',
      vatInfo: '23%'
    }
  ]
</script>

<template>
  <div class="magazines">
    <div class="magazines__hero">
      <MagazinesHeader />
      <div class="magazines__hero-image">
        <!-- <img src="@/assets/images/magazines-hero.png" alt="Czasopisma Kazus" /> -->
      </div>
    </div>

    <div class="magazines__content">
      <div class="magazines__grid">
        <MagazineCard
          v-for="magazine in magazines"
          :key="magazine.id"
          :title="magazine.title"
          :price="magazine.price"
          :image="magazine.image"
          :vatInfo="magazine.vatInfo"
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

    &__content {
      @include m.container;
      padding: v.$spacing-xl 0;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: v.$spacing-xl;
      margin-top: v.$spacing-xl;
    }
  }
</style>
