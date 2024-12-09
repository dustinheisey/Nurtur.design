<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { Icon } from '@/types';

const {
  name,
  size = 'm',
  variant
} = defineProps<{
  name: Icon;
  size?: 's' | 'm' | 'l' | 'xl';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'surface' | 'inverse';
}>();

const icon = defineAsyncComponent(() => import(`../../assets/icons/${name}.svg`));
</script>

<template>
  <component :is="icon" :class="['icon', 'icon-' + variant, 'icon-' + size]" />
</template>

<style scoped lang="scss">
.icon {
  display: inline-block;
  color: inherit;
  inline-size: var(--size, 1.5rem);
  block-size: var(--size, 1.5rem);
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
.icon-error {
  color: var(--color-error);
}
.icon-surface {
  color: var(--color-on-surface);
}
.icon-s {
  --size: 1.25rem;
}
.icon-m {
  --size: 1.5rem;
}
.icon-l {
  --size: 2rem;
}
.icon-xl {
  --size: 6rem;
}
</style>
