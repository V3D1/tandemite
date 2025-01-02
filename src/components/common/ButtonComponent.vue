<script setup lang="ts">
  interface Props {
    variant?: 'primary' | 'secondary' | 'highlight'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    fullWidth?: boolean
  }

  withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
    fullWidth: false
  })

  defineEmits<{
    click: [event: MouseEvent]
  }>()
</script>

<template>
  <button
    :class="[
      'button',
      `button--${variant}`,
      `button--${size}`,
      { 'button--full-width': fullWidth }
    ]"
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
  .button {
    @include m.button-base;
    border-radius: 0;
    transition: background-color 0.2s ease;

    &--primary {
      background-color: v.$color-primary;
      color: v.$color-white;
      letter-spacing: 2.4px;

      &:hover:not(:disabled) {
        background-color: v.$color-secondary;
      }
    }

    &--secondary {
      background: none;
      color: v.$color-primary;
      letter-spacing: 2.4px;

      &:hover:not(:disabled) {
        color: v.$color-secondary;
      }
    }

    &--highlight {
      width: 90%;
      padding: v.$spacing-base v.$spacing-base;
      background-color: v.$color-highlight;
      letter-spacing: 2.4px;
      color: v.$color-white;

      &:hover {
        background-color: v.$color-secondary;
      }
    }

    &--small {
      padding: v.$spacing-xs v.$spacing-sm;
      font-size: v.$font-size-sm;
    }

    &--medium {
      padding: v.$spacing-base v.$spacing-base;
      font-size: v.$font-size-base;
    }

    &--large {
      padding: v.$spacing-base v.$spacing-xl;
      font-size: v.$font-size-lg;
    }

    &--full-width {
      width: 100%;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
</style>
