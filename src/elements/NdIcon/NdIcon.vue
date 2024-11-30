<script setup lang="ts">
import { computed } from 'vue';
import { Icons } from '../element-types';

const props = defineProps<{
  icon: Icons;
  size?: 's' | 'l' | 'xl';
  variant?: 'primary' | 'secondary' | 'tertiary';
}>();

const classes = computed(() => ({
  icon: true,
  [`icon-${props.variant}`]: props.variant,
  [`icon-${props.size}`]: props.size
}));
</script>

<template>
  <svg :class="classes">
    <use :href="`icons/${icon}.svg`"></use>
  </svg>
</template>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  color: inherit;
  inline-size: 24px;
  block-size: 24px;
  line-height: 1;
  flex-shrink: 0;
  max-width: initial;
}

.icon use {
  fill: currentColor;
}

.icon-primary {
  color: var(--color-primary);
}

.icon-secondary {
  color: var(--color-secondary);
}

.icon-tertiary {
  color: var(--color-tertiary);
}

.icon-s {
  inline-size: 20px;
  block-size: 20px;
}

.icon-l {
  inline-size: 32px;
  block-size: 32px;
}

.icon-xl {
  inline-size: 48px;
  block-size: 48px;
}
</style>
