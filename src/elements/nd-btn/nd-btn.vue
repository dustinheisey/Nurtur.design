<script setup lang="ts">
import { EaIcon } from '@/components';
import type { Icon } from '@/types';
import { computed } from 'vue';

const {
  variant = 'primary',
  label,
  icon,
  size = 'm',
  href
} = defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'icon-subtle';
  icon?: Icon;
  label?: string;
  size?: 's' | 'm' | 'l';
  href?: string;
}>();

const classes = computed(() => ['btn', 'btn-' + variant, 'gap-xs']);
</script>

<template>
  <component :is="href ? 'router-link' : 'button'" :to="href" :class="classes" :aria-label="label">
    <ea-icon v-if="icon" :name="icon" :size="size" />
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: var(--radius-s);
  padding: var(--space-xs) var(--space-s);
}

.btn-icon {
  background: var(--color-surface-container-high);
  border-color: var(--color-surface-container-high);
  color: var(--color-primary);
  padding: var(--space-xs);
}

.btn-icon-subtle {
  background: transparent;
  border-color: transparent;
  color: var(--color-on-surface);
  padding: var(--space-2xs);
  box-shadow: none;

  &:hover {
    background: var(--color-surface-container);
    border-color: var(--color-surface-container);
    box-shadow: none;
    transform: none;
  }
}
</style>
