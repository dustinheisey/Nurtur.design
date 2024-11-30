<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 's' | 'l';
  circular?: boolean;
}>();

const classes = computed(() => ({
  btn: true,
  [`button-${props.variant}`]: props.variant,
  [`button-${props.size}`]: props.size,
  'button-circular': props.circular
}));
</script>

<template>
  <button :class="classes">{{ label }}</button>
</template>

<style lang="scss" scoped>
.button {
  color-scheme: light;
  font-family: var(--font-family-body);
  font-weight: 400;
  letter-spacing: var(--letter-spacing-body);
  color: var(--color-on-btn, var(--color-on-primary));
  line-height: var(--line-height-body);
  font-size: var(--font-size-s);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3xs);
  inline-size: auto;
  cursor: pointer;
  background-color: var(--color-primary);
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-primary);
  padding: var(--space-2xs) var(--space-s);
  box-shadow: var(--shadow-xs);
  transition: all 0.2s ease-in-out;
  position: relative;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.button:hover {
  box-shadow: var(--shadow-m);
  transform: translate3d(0, -2px, 0);
}

.button-secondary {
  background-color: transparent;
  color: var(--color-btn, var(--color-primary));
  border-color: var(--color-btn, var(--color-primary));
  box-shadow: none;
}

.button-secondary:hover {
  color: var(--color-on-btn, var(--color-primary));
  border-color: var(--color-btn, var(--color-primary));
  box-shadow: none;
}

.button-tertiary {
  background-color: transparent;
  color: var(--color-btn, var(--color-primary));
  border-color: transparent;
  box-shadow: none;
  font-size: var(--font-size-s);
  padding-inline-start: 0;
}

.button-tertiary.button-l {
  font-size: var(--font-size-l);
}

.button-tertiary:hover {
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}

.button-s {
  padding: var(--space-3xs) var(--space-xs);
}

.button-l {
  padding: var(--space-2xs) var(--space-l);
}

.button-circular {
  inline-size: 50px;
  block-size: 50px;
  padding: 0;
}

.button-circular.button-s {
  inline-size: 44px;
  block-size: 44px;
  padding: 0;
}

.button-circular.button-l {
  inline-size: 56px;
  block-size: 56px;
  padding: 0;
}
</style>
