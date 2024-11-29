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
  <div class="bg-img">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.bg-img {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  place-content: center;
}

.bg-img > img,
.bg-img > svg,
.bg-img > picture {
  grid-column: 1;
  grid-row: 1;
  object-fit: cover;
  object-position: center;
  min-inline-size: 100%;
  min-block-size: 100%;
  z-index: 0;
  border-radius: 0;
}

.bg-img > :not(img, svg, picture) {
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
}

.bg-img .filter {
  padding: var(--space-xl);
  border-radius: var(--radius-l);
  background-color: var(--color-background);
  box-shadow: var(--shadow-xl);
}
</style>
;
