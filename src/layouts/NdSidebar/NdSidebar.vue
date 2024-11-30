<!-- The Sidebar - Sidebar that wraps when needed -->
<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space } from '../layout-types.ts';

type Role = 'group';

const props = defineProps<{
  align?: Align;
  justify?: Justify;
  gap?: Gap;
  inset?: Inset;
  space?: Space;
  role?: Role;
}>();

const classes = computed(() => ({
  cluster: true,
  [`${props.align}`]: props.align,
  [`${props.justify}`]: props.justify,
  [`${props.gap}`]: props.gap,
  [`${props.inset}`]: props.inset,
  [`${props.space}`]: props.space
}));
</script>
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--gap, var(--space-m));
}

.sidebar > .fixed {
  flex-grow: 1;
}

.sidebar > :not(.fixed) {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: calc((100% - var(--gap, var(--space-m))) / 2);
}

.sidebar-split-s > .fixed {
  flex-basis: 50ch;
}

.sidebar-split > .fixed {
  flex-basis: 45ch;
}

.sidebar-split > :not(.fixed) {
  flex-basis: 0;
  flex-grow: 2;
  min-inline-size: 50%;
}

.sidebar-equal > * {
  flex-basis: 0;
  flex-grow: 1;
  min-inline-size: calc((100% - var(--gap, var(--space-m))) / 2);
}
</style>
