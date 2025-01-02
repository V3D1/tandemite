<script setup lang="ts">
  import IconComponent from '@/components/common/IconComponent.vue'
  import ButtonComponent from '@/components/common/ButtonComponent.vue'
  import { computed } from 'vue'
  import { useCartStore } from '@/stores/CartStore'
  import { storeToRefs } from 'pinia'
  import book from '@/assets/icons/book.svg'
  import rubbishBin from '@/assets/icons/rubbishBin.svg'

  defineProps<{
    isOpen: boolean
  }>()

  const emit = defineEmits<{
    close: []
  }>()

  const store = useCartStore()
  const { items: cartItems } = storeToRefs(store)
  const totalPrice = computed(() => store.totalPrice)

  const handleRemoveItem = (itemId: number) => {
    store.removeItem(itemId)
  }
</script>

<template>
  <div v-if="isOpen" class="cart-popover-overlay" @click.self="emit('close')"></div>
  <Transition name="fade">
    <div class="cart-popover" v-if="isOpen">
      <div class="cart-popover__content">
        <div class="cart-popover__header">
          <h2>Twój koszyk</h2>
          <button class="cart-popover__close" @click="emit('close')">&times;</button>
        </div>

        <div v-if="cartItems.length === 0" class="cart-popover__empty">Twój koszyk jest pusty</div>

        <div v-else class="cart-popover__items">
          <div v-for="item in cartItems" :key="item.id" class="cart-popover__item">
            <div class="cart-popover__item-info">
              <div class="cart-popover__item-type">
                <IconComponent :icon-path="book" :size="31" />
              </div>
              <div class="cart-popover__item-details">
                <h3>{{ item.title }}</h3>
                <button
                  class="cart-popover__item-remove"
                  @click="handleRemoveItem(item.id)"
                  aria-label="Usuń z koszyka"
                >
                  <IconComponent :icon-path="rubbishBin" :size="14" />
                </button>
              </div>
            </div>
            <div class="cart-popover__item-price">
              <span class="cart-popover__label">Cena</span>
              <span class="cart-popover__value"
                >{{ item.quantity + ' x' }} {{ item.price.toFixed(2) }} PLN</span
              >
            </div>
          </div>
        </div>

        <div v-if="cartItems.length > 0" class="cart-popover__footer">
          <div class="cart-popover__total">
            <span class="cart-popover__total-summary">Łączna kwota</span>
            <div class="cart-popover__total-amount">
              <span class="cart-popover__price">{{ totalPrice.toFixed(2) }} PLN</span>
              <span class="cart-popover__vat">+ VAT 23%</span>
            </div>
          </div>
          <ButtonComponent variant="highlight">PRZEJDŹ DO KOSZYKA</ButtonComponent>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  .cart-popover-overlay {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
  }

  .cart-popover {
    position: absolute;
    top: 59px;
    right: 0;
    width: 381px;
    padding: 0 32px 0 28px;
    background-color: v.$color-white;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 1001;

    @include m.responsive('mobile') {
      padding: 0 10px 0 40px;
    }

    &__content {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    &__empty {
      padding: v.$spacing-lg;
    }

    &__close {
      position: absolute;
      top: 0;
      right: 0;
      background-color: v.$color-primary;
      width: 41px;
      height: 41px;
      cursor: pointer;
      border: none;
      color: v.$color-white;
      font-size: v.$font-size-base * 2;
    }

    &__header {
      margin-top: v.$spacing-base;
      h2 {
        font-size: 18px;
        color: v.$color-menu-item;
        font-weight: bold;
      }
    }

    &__items {
      flex: 1;
      overflow-y: auto;
      padding-top: v.$spacing-lg;
    }

    &__item {
      background-color: v.$color-header;
      margin-bottom: 12px;

      &-info {
        @include m.flex(row, flex-start, center);
        gap: v.$spacing-base;
        padding: 5px 19px 0 11px;
      }

      &-type {
        @include m.flex(row, center, center);
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color: v.$color-background;
      }

      &-details {
        @include m.flex(row, flex-start, center);

        h3 {
          width: 188px;
          font-size: 16px;
          color: v.$color-primary;
          margin-bottom: v.$spacing-xs;
        }
      }

      &-remove {
        margin-left: 20px;
        border: none;
        background: none;
        cursor: pointer;
      }

      &-price {
        @include m.flex(row, space-between, center);
        width: 100%;
        margin-top: 10px;
        padding: 15px 19px 15px 11px;
        border-top: 1px solid v.$color-secondary;
      }
    }

    &__label {
      color: v.$color-secondary;
      font-size: v.$font-size-sm;
    }

    &__value {
      font-weight: 600;
    }

    &__footer {
      @include m.flex(column, space-between, center);
      margin-top: v.$spacing-sm;
      padding-top: v.$spacing-lg;
      padding-bottom: v.$spacing-lg;
      border-top: 1px solid v.$color-secondary;
    }

    &__total {
      @include m.flex(row, space-between, center);
      width: 100%;
      margin-bottom: v.$spacing-lg;

      &-summary {
        color: v.$color-menu-item;
        font-size: 16px;
      }

      &-amount {
        text-align: right;
      }
    }

    &__price {
      font-size: v.$font-size-lg;
      font-weight: 600;
      display: block;
    }

    &__vat {
      font-size: v.$font-size-xs;
      color: v.$color-secondary;
    }

    &__button {
      width: 90%;
      padding: v.$spacing-base v.$spacing-base;
      background-color: v.$color-highlight;
      letter-spacing: 2.4px;
      color: v.$color-white;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: v.$color-secondary;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
