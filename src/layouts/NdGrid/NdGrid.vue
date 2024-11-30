<!-- The Grid - Arrange children into grid layout -->
<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space } from '../layout-types.ts';

type Role = 'group';

const props = defineProps<{
  cols?: 2 | 3 | 4 | 5 | 6;
  align?: Align;
  justify?: Justify;
  gap?: Gap;
  inset?: Inset;
  space?: Space;
  role?: Role;
}>();

const classes = computed(() => ({
  grid: true,
  [`grid-${props.cols}`]: props.cols,
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));

  --grid-gap: var(--gap, var(--space-m));

  gap: var(--grid-gap);
  place-items: stretch;
  place-content: stretch;
}

.grid > * {
  margin: 0;
}

.grid-2 {
  grid-template-columns: repeat(
    auto-fit,
    minmax(max(var(--min-inline-size, 10rem), calc((100% - 1 * var(--grid-gap)) / 2)), 1fr)
  );
}

.grid-3 {
  grid-template-columns: repeat(
    auto-fit,
    minmax(max(var(--min-inline-size, 9rem), calc((100% - 2 * var(--grid-gap)) / 3)), 1fr)
  );
}

.grid-4 {
  grid-template-columns: repeat(
    auto-fit,
    minmax(max(var(--min-inline-size, 6rem), calc((100% - 3 * var(--grid-gap)) / 4)), 1fr)
  );
}

.grid-5 {
  grid-template-columns: repeat(
    auto-fit,
    minmax(max(var(--min-inline-size, 5rem), calc((100% - 4 * var(--grid-gap)) / 5)), 1fr)
  );
}

.grid-6 {
  grid-template-columns: repeat(
    auto-fit,
    minmax(max(var(--min-inline-size, 4rem), calc((100% - 5 * var(--grid-gap)) / 6)), 1fr)
  );
}
</style>
