<script setup lang="ts">
import { ButtonHTMLAttributes, ref } from "vue";

interface ButtonProps extends ButtonHTMLAttributes {
  variant?: "primary" | "default";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "default",
});
</script>

<template>
  <button :class="[$style.button, $style[variant], props.class]">
    {{ props.variant }}
  </button>
</template>

<style lang="scss" scoped module>
.button {
  border: none;
  background: var(--color-gray);
  border-radius: 100px;
  padding: 1rem 2rem;
  line-height: 1;
  border: 1px solid transparent;
  transition: background 0.2s linear, color 0.2s linear,
    border-color 0.2s linear;
  text-decoration: none !important;
  outline: none;
  user-select: none;
  display: inline-block;
  padding: 15px 20px;

  @include base-font();

  &.small {
    padding: 0.5rem 1rem;
    @include base-font(small);
    line-height: 1;
  }

  &:hover {
    background: var(--color-gray-light);
  }

  &[disabled] {
    background: var(--color-disabled);
    color: var(--color-gray);
    cursor: not-allowed;
    pointer-events: none;
    border: 1px solid transparent;

    &:hover {
      background: var(--color-disabled);
    }
  }
}

.button.primary {
  color: white;
  background: var(--color-purple);
  border: 1px solid transparent;

  &:hover {
    background: var(--color-purple-light);
  }

  &__outline {
    color: var(--color-text);
    border: 1px solid var(--color-text);
    background: transparent;

    &:hover {
      background: transparent;
      border: 1px solid var(--color-peach);
      color: var(--color-peach);
    }
  }
}
</style>
