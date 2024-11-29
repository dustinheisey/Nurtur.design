<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space, Role } from '../../types/common-types.ts';

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
  <div class="masonry">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
/* ? The Masonry - Product galleries, testimonials, blog posts, portfolio items */

/* Masonry style grid */
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
;
