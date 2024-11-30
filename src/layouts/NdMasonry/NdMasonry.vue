<!-- The Masonry - Masonry style grid -->
<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space } from '../layout-types.ts';

type Role = 'group';

const props = defineProps<{
  col: 2 | 3;
  align?: Align;
  justify?: Justify;
  gap?: Gap;
  inset?: Inset;
  space?: Space;
  role?: Role;
  region?: boolean;
}>();

const classes = computed(() => ({
  masonry: true,
  [`col-${props.col}`]: props.col,
  '.region': props.region,
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
.masonry {
  gap: var(--gap, var(--space-m));
  columns: 1;
}

.masonry > * {
  break-inside: avoid;
}

.masonry > * + * {
  margin-block-start: var(--gap, var(--space-m));
  display: block;
}

@media (--tablet-portrait-up) {
  .masonry.col-2 {
    columns: 2;
  }
}

@media (--tablet-landscape-up) {
  .masonry.col-3 {
    columns: 3;
  }
}
</style>
