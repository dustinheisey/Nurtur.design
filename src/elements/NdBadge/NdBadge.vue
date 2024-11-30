<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'l';
  status?: boolean;
}>();

const classes = computed(() => ({
  badge: true,
  [`badge-${props.variant}`]: props.variant,
  [`badge-${props.size}`]: props.size,
  status: props.status
}));
</script>

<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>

<style lang="scss" scoped>
.badge {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-pill);
  color: var(--on-bg, var(--color-on-badge-primary, var(--color-on-primary-container)));
  background-color: var(--bg, var(--color-badge-primary, var(--color-primary-container)));
  padding: var(--space-3xs) var(--space-2xs);
  font-size: var(--font-size-xs);
  font-weight: 500;
  font-family: var(--font-family-body);
}

.badge-primary {
  --bg: var(--color-badge-primary, var(--color-primary-container));
  --on-bg: var(--color-on-badge-primary, var(--color-on-primary-container));
}

.badge-secondary {
  --bg: var(--color-badge-secondary, var(--color-secondary-container));
  --on-bg: var(--color-on-badge-secondary, var(--color-on-secondary-container));
}

.badge-tertiary {
  --bg: var(--color-badge-tertiary, var(--color-tertiary-container));
  --on-bg: var(--color-on-badge-tertiary, var(--color-on-tertiary-container));
}

.badge-l {
  font-size: var(--font-size-s);
  padding: var(--space-2xs) var(--space-xs);
}

.status::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: var(--space-2xs);
  border-radius: 50%;
  background-color: var(--on-bg);
}
</style>
